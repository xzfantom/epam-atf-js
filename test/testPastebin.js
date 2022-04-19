const expect = require('chai').expect;
//const driver = require('../driver/driver');
const MainPage = require('../page/mainPage.js');
const { Builder } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

describe('Saving text to Pastebin', function(done) {

    it("Save text", async function() {
        let options = new firefox.Options();
        let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();

        this.timeout(10000);

        const mainPage = new MainPage(driver);

        await mainPage.open();

        await mainPage.writePaste('Hello from WebDriver');

        await mainPage.setExpiration('10 Minutes');
 
        await mainPage.setPasteName('helloweb');  

        await mainPage.clickSave();      

        await driver.quit();
    });
});