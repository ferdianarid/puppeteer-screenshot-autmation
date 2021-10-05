const puppeteer = require("puppeteer")

async function githubSnapshot() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1440, height: 800 });
    await page.goto('https://github.com/login')
    await page.type('#login_field', 'ferdianahmadrozikin10@gmail.com')
    await page.type('#password', '!Ferdian57387105')
    await page.click('[name="commit"]')
    await page.screenshot({ path: `./screenshots/screenshot.jpg` });

    await browser.close()
}