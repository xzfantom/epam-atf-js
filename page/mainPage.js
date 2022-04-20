const DefaultPage = require('./defaultPage.js');
const PastePage = require('./pastePage.js');
const { By, until } = require("selenium-webdriver");

class MainPage extends DefaultPage{
    url = "https://pastebin.com"

    constructor(driver) { 
        super(driver);
    }

    async open() {
        await super.open(this.url);
        const slideBox  = await this.driver.wait(until.elementLocated(By.id('hideSlideBanner')), 30000, 'Timed out after 30 seconds', 5000);
        slideBox.click();        
    }

    async writePaste(text){
        const textBox  = await this.driver.wait(until.elementLocated(By.id('postform-text')), 30000, 'Timed out after 30 seconds', 5000);
        await textBox.sendKeys(text);
    }

    async setExpiration(text){
        const expirationBox = await this.driver.findElement(By.id('select2-postform-expiration-container'));
        await expirationBox.click();
          
        const selectBox = await this.driver.findElement(By.id('select2-postform-expiration-results'));
        const elements = await selectBox.findElements(By.css("li"));
        for(let e of elements) {
          if (await e.getText() == text){
            e.click();
            break;
          };
        }
    }

    async setPasteName(text){
        const nameBox = await this.driver.findElement(By.id('postform-name'));
        await nameBox.sendKeys(text);
    }

    async clickSave(){
        const createBox = await this.driver.findElement(By.className('btn -big'));
        await createBox.click();
        const newUrl = await this.driver.getCurrentUrl();

        return new PastePage(this.driver, newUrl);
    }

    async setSyntaxHighlight(name){
        const syntaxBox = await this.driver.findElement(By.id('select2-postform-format-container'));
        await syntaxBox.click();
        
        const selectBox = await this.driver.findElement(By.id('select2-postform-format-results'));
        const elements = await selectBox.findElements(By.css("li"));
        for(let e of elements) {
          if (await e.getText() == name){
            e.click();
            break;
          };
        }
    }
}

module.exports = MainPage;