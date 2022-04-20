const deafultPage = require('./defaultPage.js');
const { By } = require("selenium-webdriver");

class PastePage extends deafultPage{
    
    constructor(driver, url) { 
        super(driver);
        this.url = url;
    }

    async open() {
        return await super.open(this.url);
    }

    
}

module.exports = PastePage;