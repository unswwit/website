var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('root');
})

module.exports = router;

const puppeteer = require('puppeteer');

async function run() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.goto(`https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML`);
    const data = await page.evaluate(() =>  document.querySelector('h2 #Syntax'));
        //document.getElementsByClassName('oajrlxb2');
        //document.querySelector('a').outerHTML

    console.log(data);
    await browser.close();
  } catch (err) {
    console.error(err);
  }
}

run();
