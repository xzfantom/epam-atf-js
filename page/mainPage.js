const deaultPage = require('./defaultPage.js');
const { By } = require("selenium-webdriver");

class MainPage extends deaultPage{
    url = "https://pastebin.com"

    constructor(driver) { 
        super(driver);
    }

    async open() {
        return await super.open(this.url);
    }

    async writePaste(text){
        let textBox = await this.driver.findElement(By.id('postform-text'));
        await textBox.sendKeys(text);
    }

    async setExpiration(text){
        let expirationBox = await this.driver.findElement(By.id('select2-postform-expiration-container'));
        await expirationBox.click();
          
        let min10Box = await this.driver.findElement(By.id('select2-postform-expiration-results'));
        let elements = await min10Box.findElements(By.css("li"));
        for(let e of elements) {
          if (await e.getText() == text){
            e.click();
            break;
          };
        }
    }

    async setPasteName(text){
        let nameBox = await this.driver.findElement(By.id('postform-name'));
        await nameBox.sendKeys(text);
    }

    async clickSave(){
        let createBox = await this.driver.findElement(By.className('btn -big'));
        await createBox.click();
    }
}

module.exports = MainPage;