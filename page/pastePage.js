const AbstractPage = require('./abstractPage.js');
const { By } = require("selenium-webdriver");

class PastePage extends AbstractPage{
    
    constructor(driver, url) { 
        super(driver);
        this.url = url;
    }

    async open() {
        return await super.open(this.url);
    }

    async getHighlightName(){
        const element = await this.driver.findElement(By.xpath("//div[@class='top-buttons']/div[@class='left']/a"));
        return await element.getText();
    }

    async getRawPasteText(){
        const element = await this.driver.findElement(By.xpath("//textarea[@class='textarea']"));
        return await element.getText();
    }
    
}

module.exports = PastePage;