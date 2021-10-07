const puppeteer = require("puppeteer")
const fs = require("fs")
const pages = fs.readFileSync('./checkk/pages.json', 'utf-8')

const site = JSON.parse(pages)

async function rapidScreenshot() {
    try {
        for (let i = 0; i < site.length; i++) {
            const browser = await puppeteer.launch({
                headless: false,
                defaultViewport: {
                    height: 800,
                    width: 1620
                },
                slowMo: 8
            })
            const page = await browser.newPage()
            await page.goto(site[i].appLinks, { waitUntil: 'load' })

            await page.screenshot({ path: `./company/${site[i].title}.jpg`, fullPage: false, type: "jpeg" })

            await page.close()
            await browser.close()
        }
    } catch (error) {
        console.log(`Error :  ${error}`)
    } finally {
        console.log(`All page successfully captured`)
    }
}

rapidScreenshot()