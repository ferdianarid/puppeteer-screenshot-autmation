// require fs and puppeteer
const fs = require("fs");
const puppeteer = require("puppeteer");

async function captureScreenshot() {
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

        await page.goto("https://web.facebook.com/?");

        // await page.type('input[name="domain"]', 'demo')
        // await page.type('input[name="username"]', 'demo')
        // await page.type('input[name="password"]', 'asdfghjkl')
        // await page.type('input[name="checkbox"]', inputs => inputs.checked)

        await page.type('input[name="email"]', 'luminoussx @gmail.com')
        await page.type('input[name="pass"]', 'ferdian57387105')

        await Promise.all([
            page.click('button[name="login"]')
        ]);

        // capture screenshot and store it into screenshots directory.
        await page.screenshot({ path: `./screenshots/result.jpg` });
    } catch (err) {
        console.log(`Error: ${err}`);
    } finally {
        await browser.close();
        console.log(`Screenshots captured.`);
    }
}

captureScreenshot();