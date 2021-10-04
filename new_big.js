const fetch = require("node-fetch");
const cheerio = require("cheerio");
const delay = require("delay");
const readline = require("readline-sync");
const fs = require("async-file");
const { URLSearchParams } = require("url");
const moment = require("moment");
const rp = require("request-promise");
const ua = require("useragent-generator");

console.log("#####################");
console.log("Panggil w Amin Tamvan");
console.log("#####################");

console.log("");
console.log("");

const apikey = readline.question("Masukan kode SGB : ");
const Reff = readline.question("Masukan Kode Referal : ");
const LooP = readline.question("Mau Berapa Banyak ? ");
const DelaY = readline.question(
  "Mau Berapa Lama (millisecond), semakin lama semakin besar peluang langsung verifikasi : "
);
const choice = readline.question(
  "mau pakai domain dari script atau dari file (y/n) ?, jika y dari script jika n dari file : "
);

let file = "";

if (choice === "n") {
  file += readline.question("Masukan nama file letak domain berada : ");
}

console.log("");
console.log("");

const functionRegister = (emol, domain) =>
  new Promise((resolve, reject) => {
    const email = `${emol}@${domain}`;
    fetch(
      `https://${idApi}.execute-api.us-east-2.amazonaws.com/token/api/v1/register?email=${email}&Reff=${Reff}`,
      {
        method: "post",
        headers: { "x-api-key": `${apikey}` }
      }
    )
      .then(res => res.text())
      .then(te => resolve(te))
      .catch(err => reject(err));
  });

const functionCreateEmail = (email, domain) =>
  new Promise((resolve, reject) => {
    fetch(
      `https://${idApi}.execute-api.us-east-2.amazonaws.com/token/api/v1/create-email?uname=${email}&domain=${domain}`,
      {
        method: "post",
        headers: { "x-api-key": `${apikey}` }
      }
    )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

const timeoutPromise = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, time);
  });
};

const functionGetMessages = (email, domain) =>
  new Promise((resolve, reject) => {
    fetch(`https://generator.email/`, {
      method: "get",
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        "accept-encoding": "gzip, deflate, br",
        cookie: `_ga=GA1.2.1164348503.1554262465; _gid=GA1.2.905585996.1554262465; embx=%5B%22${email}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=-aUNS6XIdbbHj__faWS_; surl=${domain}%2F${email}`,
        "upgrade-insecure-requests": 1,
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
      }
    })
      .then(res => res.text())
      .then(text => {
        const $ = cheerio.load(text);
        const src = $(".button").attr("href");

        resolve(src);
      })
      .catch(err => reject(err));
  });

const functionVerification = (email, token) =>
  new Promise((resolve, reject) => {
    fetch(
      `https://${idApi}.execute-api.us-east-2.amazonaws.com/token/api/v1/email-verification?email=${email}&token=${token}`,
      {
        method: "POST",
        headers: { "x-api-key": `${apikey}` }
      }
    )
      .then(res => res.text())
      .then(text => {
        resolve(text);
      })
      .catch(err =>
        console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "Ada masalah sssSssstt..."
        )
      );
  });

const functionGetLocation = domain =>
  new Promise((resolve, reject) => {
    const userAgent =
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36";
    const url = `${domain}`;

    const _include_headers = function(body, response, resolveWithFullResponse) {
      return {
        headers: response.headers,
        data: body,
        finalUrl: response.request.uri.href // contains final URL
      };
    };

    const options = {
      uri: url,
      followAllRedirects: true,
      method: "get",
      gzip: true,
      transform: _include_headers,
      headers: {
        "User-Agent": userAgent
      }
    };

    const p1 = rp(options)
      .then((response, error, html) => {
        resolve(response.finalUrl);
      })
      .catch(err => reject(err));
  });

const genEmail = length =>
  new Promise((resolve, reject) => {
    var text = "";
    var possible =
      "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    resolve(text);
  });

// const genClientID = () =>
//   new Promise((resolve, reject) => {
//     var text = "";
//     var possible =
//       "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     for (var i = 0; i < 68; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));

//     resolve(text);
//   });

const domain = [];
const domainIntern = ["aminudin.me", "pengangguran.me"];
(async () => {
  if (choice === "y") {
    for (let index = 0; index < LooP; index++) {
      try {
        const timeout = await timeoutPromise(1000);
        const item = await domainIntern[
          (Math.random() * domainIntern.length) | 0
        ];
        const emel = await genEmail(70);
        // const client = await genClientID();

        await delay(10000);
        const register = await functionRegister(emel, item);
        const email = emel + "@" + item;
        // console.log(register.length + register + " " + email);

        await console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "Membuat Email..."
        );

        if (
          register.includes(`data": {
          "user_id`)
        ) {
          await console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Sukses register dengan email :" +
              " " +
              `${email}`
          );

          await console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Code register :" +
              " " +
              `${register}`
          );

          const createMail = await functionCreateEmail(emel, item);
          await console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Mengambil Token..."
          );

          await delay(DelaY);

          const message = await functionGetMessages(emel, item);

          if (message === undefined) {
            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "Gagal Mengambil Token..."
            );
            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "Cek sendiri dan tunggu dalam beberapa menit/jam kedepan :" +
                " " +
                `https://generator.email/${email}`
            );
            fs.appendFile(
              "result_url.txt",
              `https://generator.email/${email} \n`,
              "utf-8"
            );
            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "Lokasi Link :" +
                " " +
                `result_url.txt`
            );
            console.log("");
            console.log("");
          } else {
            const getLocation = await functionGetLocation(message);
            const decodeURL = await decodeURIComponent(getLocation);

            const regex = await new RegExp(/\?(?:code)\=([\S\s]*?)\&/);

            const resGex = await regex.exec(decodeURL);

            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "Proses Verifikasi"
            );

            const veryf = await functionVerification(
              email,
              getLocation.split("=")[1]
            );

            if (veryf.includes("Reward successfully made") === true) {
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  "Veryf Sukses"
              );
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  "Message :" +
                  " " +
                  veryf
              );
              console.log("");
              console.log("");
            } else {
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  "Failed"
              );

              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  "Message :" +
                  " " +
                  veryf
              );
              console.log("");
              console.log("");
            }
          }
        } else {
          console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Failed Register / Hal lain"
          );
          console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Message : " +
              " " +
              register
          );
          console.log("");
          console.log("");
        }
      } catch (e) {
        console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "Ada error, Code error :" +
            " " +
            e
        );
        console.log("");
        console.log("");
      }
    }
  } else {
    const dm = await fs.readFile(file, "utf8");
    const array = await dm
      .toString()
      .replace(/\r\n|\r|\n/g, " ")
      .split(" ");

    const arpush = array.map(ury => {
      if (ury.length !== 0) {
        domain.push(ury);
      }
    });

    for (let index = 0; index < LooP; index++) {
      try {
        const timeout = await timeoutPromise(1000);
        const item = await domain[(Math.random() * domain.length) | 0];
        const emel = await genEmail(10);
        await delay(10000);
        const register = await functionRegister(emel, item);
        const email = emel + "@" + item;

        await console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "Membuat Email..."
        );

        console.log(register);

        if (register.length < 70) {
          await console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Sukses register dengan email :" +
              " " +
              `${email}`
          );

          await console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Code register :" +
              " " +
              `${register}`
          );

          const createMail = await functionCreateEmail(emel, item);
          await console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Mengambil Token..."
          );

          await delay(DelaY);

          const message = await functionGetMessages(emel, item);

          if (message === undefined) {
            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "Gagal Mengambil Token..."
            );
            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "Cek sendiri dan tunggu dalam beberapa menit/jam kedepan :" +
                " " +
                `https://generator.email/${email}`
            );
            fs.appendFile(
              "result_url.txt",
              `https://generator.email/${email} \n`,
              "utf-8"
            );
            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "Lokasi Link :" +
                " " +
                `result_url.txt`
            );
            console.log("");
            console.log("");
          } else {
            const getLocation = await functionGetLocation(message);
            const decodeURL = await decodeURIComponent(getLocation);

            const regex = await new RegExp(/\?(?:code)\=([\S\s]*?)\&/);

            const resGex = await regex.exec(decodeURL);

            console.log(
              "[" +
                " " +
                moment().format("HH:mm:ss") +
                " " +
                "]" +
                " " +
                "Proses Verifikasi"
            );

            const veryf = await functionVerification(
              email,
              getLocation.split("=")[1]
            );

            if (veryf.includes("Reward successfully made") === true) {
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  "Veryf Sukses"
              );
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  "Message :" +
                  " " +
                  veryf
              );
              console.log("");
              console.log("");
            } else {
              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  "Failed"
              );

              console.log(
                "[" +
                  " " +
                  moment().format("HH:mm:ss") +
                  " " +
                  "]" +
                  " " +
                  "Message :" +
                  " " +
                  veryf
              );
              console.log("");
              console.log("");
            }
          }
        } else {
          console.log(
            "[" +
              " " +
              moment().format("HH:mm:ss") +
              " " +
              "]" +
              " " +
              "Email Sudah Terdaftar / Tidak Valid"
          );
          console.log("");
          console.log("");
        }
      } catch (e) {
        console.log(
          "[" +
            " " +
            moment().format("HH:mm:ss") +
            " " +
            "]" +
            " " +
            "Ada error, Code error :" +
            " " +
            e
        );
        console.log("");
        console.log("");
      }
    }
  }
})();
