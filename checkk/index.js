// require fs and puppeteer
const fs = require("fs");
const puppeteer = require("puppeteer");

async function takeScreenshot() {
    // if screenshots directory is not exist then create one
    if (!fs.existsSync("screenshots")) {
        fs.mkdirSync("screenshots");
    }
    let browser = null;
    try {
        // launch headless Chromium browser
        browser = await puppeteer.launch({ headless: false });
        // create new page object
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);

        // set viewport width and height
        await page.setViewport({ width: 1440, height: 800 });

        await page.goto("https://testing.hrmlabs.com/login?redirect=%2Fhome", { waitUntil: 'networkidle2' });
        await page.type('input[name="domain"]', 'demo')
        await page.type('input[name="username"]', 'demo')
        await page.type('input[name="password"]', 'asdfghjkl')

        await page.evaluate(() => {
            document.querySelector('input[type=checkbox]').click();
        });

        const clickLogin = 'button[name="loginButton"]'
        await page.evaluate((clickLogin) => document.querySelector(clickLogin).click(), clickLogin);

        await page.waitForTimeout(15000)

        let reportElement = "a#reportsMenu"
        await page.evaluate((reportElement) => document.querySelector(reportElement).click(), reportElement);
        await page.waitForTimeout(15000)

        const selectors = ".m-r-list .m-r-list__item:nth-child(5)"
        const elementSelector = await page.$(selectors)
        await elementSelector.click()
        await page.waitForTimeout(10000)

        await page.screenshot({ path: `./screenshots/outputFiles.jpg`, fullPage: false });

        const title = await page.title()
        console.log(`Page : ${ title }`)

        const url = await page.url()
        console.log(`URL : ${ url }`)

    } catch (err) {
        console.log(`Error: ${err}`);
    } finally {
        await browser.close();
        console.log(`Status : Successfully captured.`);
    }
}

takeScreenshot();
/**capture screenshot and store it into screenshots directory.
 * */