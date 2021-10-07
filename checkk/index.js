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

        const el = 'button[name="loginButton"]'
        await page.evaluate((el) => document.querySelector(el).click(), el);

        await page.waitForTimeout(15000)

        let elems = "a#reportsMenu"
        await page.evaluate((elems) => document.querySelector(elems).click(), elems);
        await page.waitForTimeout(15000)

        const selectors = ".m-r-list .m-r-list__item:nth-child(5)"
        const elemSelector = await page.$(selectors)
        await elemSelector.click()
        await page.waitForTimeout(10000)

        await page.screenshot({ path: `./screenshots/filesFourth.jpg`, fullPage: false });

        const title = await page.title()
        console.log(`Title is ${ title }`)

        const url = await page.url()
        console.log(`URL : ${ url }`)

    } catch (err) {
        console.log(`Error: ${err}`);
    } finally {
        await browser.close();
        console.log(`Successfully captured.`);
    }
}

takeScreenshot();
/**capture screenshot and store it into screenshots directory.
 * */