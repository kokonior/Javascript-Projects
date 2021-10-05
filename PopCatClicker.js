const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
const log = require("single-line-log2").stdout;
const klik = async (page) => {
  await page.click("#app > div");
  await page.click("#app > div");
};

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    devtools: false,
  });
  const popCatPage = await browser.newPage();
  await popCatPage.goto("https://popcat.click/", { waitUntil: "networkidle2" });
  while (true) {
    await klik(popCatPage);
    let counter = await popCatPage.$("#app > div > div[class*=counter]");
    let count = await counter.evaluate((el) => el.textContent);
    log("Clicked times : ", count);
  }
})();
