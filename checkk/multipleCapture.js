const puppeteer = require("puppeteer")
const fs = require("fs")
    // const multiple = fs.readFileSync("pages.json", "utf-8")

async function rapidScreenshot() {
    if (!fs.existsSync("company")) {
        fs.mkdirSync("company")
    }
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            height: 800,
            width: 1920
        },
        slowMo: 8
    })
    const page = await browser.newPage()
    await page.goto('https://www.google.com', { waitUntil: 'load' })

    await page.screenshot({ path: `./company/google.jpg`, fullPage: false })

    await page.close()
    await browser.close()
}

rapidScreenshot()