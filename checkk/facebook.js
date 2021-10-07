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
        browser = await puppeteer.launch({ headless: true });
        // create new page object
        const page = await browser.newPage();

        // set viewport width and height
        await page.setViewport({ width: 1440, height: 800 });

        // await page.goto("https://web.facebook.com/?");
        await page.goto("https://web.facebook.com/?_rdc=1&_rdr");
        await page.type('input[name="email"]', '0895322377855')
        await page.type('input[name="pass"]', 'ferdian57387105')
            // await page.type('m-checkbox input[name="checkbox"]', inputs => inputs.checked)

        await page.click('button[name="login"]')
            // await page.goto('https://github.com/login')
            // await page.type('#login_field', 'ferdianahmadrozikin10@gmail.com')
            // await page.type('#password', '!')
            // await page.click('[name="commit"]')
            // await Promise.all([
            // ]);
        await page.waitForTimeout(20000)
            // capture screenshot and store it into screenshots directory.
        await page.screenshot({ path: `./screenshots/dashboard.jpg`, fullPage: false });

    } catch (err) {
        console.log(`Error: ${err}`);
    } finally {
        await browser.close();
        console.log(`Successfully captured.`);
    }
}

takeScreenshot();