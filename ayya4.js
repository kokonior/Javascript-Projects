const axios = require('axios');
const puppeter = require('puppeteer');
const readline = require('readline');
// const moment = require('moment')



async function getName() {
    return new Promise(async function(resolve, reject) {
        axios.get(`https://randomuser.me/api/`).then(res => {
            dataName = res.data.results;
            resolve(dataName);

        }).catch(err => console.log(err))

    });

}


async function cardNumber() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question('[-] Masukan Card Number: ', (answer) => {
            rl.close();
            resolve(answer)
        });
    })
}

async function fCvv() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question('[-] Masukan cvv: ', (answer) => {
            rl.close();
            resolve(answer)
        });
    })
}

async function noHP() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question('[-] Masukan No HP: ', (answer) => {
            rl.close();
            resolve(answer)
        });
    })
}

async function OTP() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question('[-] Masukan OTP: ', (answer) => {
            rl.close();
            resolve(answer)
        });
    })
}

async function fLanjut() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question('[-] Matikan VPN jika sudah mematikan tekan Y : ', (answer) => {
            rl.close();
            resolve(answer)
        });
    })
}
async function fLanjuts() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question('[-] Hidupkan VPN jika sudah hidupkan tekan Y : ', (answer) => {
            rl.close();
            resolve(answer)
        });
    })
}
async function inputEmail() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question('[-] Masukan email: ', (answer) => {
            rl.close();
            resolve(answer)
        });
    })
}

(async() => {
    let mxn = ""
    const dataName = await getName();
    // const email = await getEmail();
    const pass = dataName[0].login.password;
    while (mxn != "TRY 30 DAYS FREE") {
        const browserGa = await puppeter.launch({
            headless: false,
            slowMo: 10,
            executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        })
        const context = await browserGa.createIncognitoBrowserContext();
        const page = await context.newPage();
        await page.goto("https://www.netflix.com");
        console.log("[-] Mulai Registrasi Netflix");
        const element_try = await page.$("#appMountPoint > div > div > div > div > div > div.our-story-cards > div.our-story-card.hero-card.vlv > div.our-story-card-text > form > div > div > button > span.cta-btn-txt");
        mxn = await page.evaluate(element_try => element_try.innerText, element_try);
        console.log(mxn);
        if (mxn == "TRY 30 DAYS FREE") {
            console.log("[-] Yang kamu mau ketemu ni lanjut");
            const email = await inputEmail();
            console.log("[-] Sedang Memasukkan Email : " + email);
            const input_email = "#id_email_hero_fuji";
            await page.type(input_email, email);
            page.keyboard.press('Enter');
            await page.waitForNavigation({ waitUntil: 'load' });
            page.keyboard.press('Tab');
            page.keyboard.press('Tab');
            page.keyboard.press('Tab');
            page.keyboard.press('Enter');
            await page.waitForTimeout(4000);
            const input_pass = "#id_password";
            await page.type(input_pass, pass);
            console.log("[-] Sedang memasukkan password : " + pass);
            await page.waitForTimeout(4000);
            page.keyboard.press('Enter');
            await page.waitForTimeout(4000);
            console.log("[-] Sedang Melihat Plan")
            await page.waitForTimeout(4000);
            await page.evaluate(() => {
                document.querySelector('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button').click()
            })
            await page.waitForTimeout(4000);
            if (await page.$("#appMountPoint > div > div > div.simpleContainer > div > div.planFormContainer.planCardSelection > div.plan-card-container.alt-visuals > div.supplimental-flex-container > div > button") !== null) {
                await page.evaluate(() => {
                    document.querySelector('#appMountPoint > div > div > div.simpleContainer > div > div.planFormContainer.planCardSelection > div.plan-card-container.alt-visuals > div.supplimental-flex-container > div > button').click()
                })
            } else {
                await page.evaluate(() => {
                    document.querySelector('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button').click()
                })
            }

            await page.waitForTimeout(4000);
            await page.evaluate(() => {
                document.querySelector('#creditOrDebitCardDisplayStringId > a > div > div.nfTabSelection--text.card-type-text.paymentActive > span').click()
            })
            await page.waitForTimeout(4000);
            const input_first = "#id_firstName";
            console.log("[-] Sedang Memasukkan Firstname : " + dataName[0].name.first);
            await page.type(input_first, dataName[0].name.first);
            console.log("[-] Sedang Memasukkan Lastname : " + dataName[0].name.last);
            const input_last = "#id_lastName";
            await page.type(input_last, dataName[0].name.last);
            const input_expired = "#id_creditExpirationMonth";
            await page.type(input_expired, "0925");
            const cardnumber = await cardNumber();
            const input_card_number = "#id_creditCardNumber";
            await page.type(input_card_number, cardnumber);
            const cvv = await fCvv();
            const input_cvv = "#id_creditCardSecurityCode";
            await page.type(input_cvv, cvv);
            console.log("[-] Sedang Memasukkan Data")
            const lanjut = await fLanjut();

            if (lanjut.toLowerCase() == "y") {
                await page.evaluate(() => {
                    document.querySelector('#simplicityPayment-START').click();
                })
                const nomor = await noHP();
                const input_no_hp = "#id_phoneNumber";
                await page.type(input_no_hp, nomor);
                await page.evaluate(() => {
                    document.querySelector('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button').click();
                })
                const otp = await OTP();
                const input_otp = "#id_signupOtpCode";
                await page.type(input_otp, otp);
                let lanjut2 = await fLanjuts();
                if (lanjut2.toLowerCase() == "y") {
                    await page.evaluate(() => {
                        document.querySelector('#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button').click();
                    })
                    await page.waitForSelector('#appMountPoint > div > div > div.simpleContainer > div > div.otpCodeEntryContainer > div.messageContainer > div > div.nf-message-contents > span');
                    await page.goto("https://www.netflix.com/signup/otpCodeEntry");
                    // const input_cvv = "#id_securityCode";
                    // await page.type(input_cvv, cvv);
                    await page.waitForNavigation();
                    await page.evaluate(() => {
                        document.querySelector('#appMountPoint > div > div > div.simpleContainer > div > form > div.submitBtnContainer > button').click();
                    })
                }

            }

            console.log("[-] Success");
            console.log("Email : " + email);
            console.log("Password : " + pass);
            console.log("Expired : 14/10/2020");
        } else {
            console.log("[x] Gagal mendapatkan yang kamu mau, ulangi")
            browserGa.close();
        }
    }
})()
