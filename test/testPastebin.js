const MainPage = require('../page/mainPage.js');
const { Builder } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

describe('Saving text to Pastebin', function(done) {
    let driver;

    before(async function() {
        let options = new firefox.Options();
        driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();

        
    })

    it("Save text", async function() {
        this.skip();
        this.timeout(10000);

        const mainPage = new MainPage(driver);

        await mainPage.open();

        await mainPage.writePaste('Hello from WebDriver');

        await mainPage.setExpiration('10 Minutes');
 
        await mainPage.setPasteName('helloweb');  

        await mainPage.clickSave();      

    });

    after(() => driver && driver.quit());
});