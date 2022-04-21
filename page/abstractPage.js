class AbstractPage {
    driver = null;

    constructor(driver){ 
        this.driver = driver;
    }

    async title() { 
        return await this.driver.getTitle(); 
    } 
    
    async open(path) {
        await this.driver.get(path);
    }

}

module.exports = AbstractPage;