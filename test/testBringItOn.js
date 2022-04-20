const MainPage = require('../page/mainPage.js');
const { Builder } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');
const assert = require('chai').assert;

describe('Saving text to Pastebin', function() {
    let driver;

    before(async function() {
        let options = new firefox.Options();
        driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();

        
    })

    it("Bring It On", async function() {
        const pasteString = 
`git config --global user.name "New Sheriff in Town"

git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        
git push origin master --force`;

        const pasteName = 'how to gain dominance among developers';

        this.timeout(30000);

        const mainPage = new MainPage(driver);
        console.log('Open page');
        await mainPage.open();
        console.log('Write paste');
        await mainPage.writePaste(pasteString);
        console.log('Set Bash');
        await mainPage.setSyntaxHighlight('Bash');
        console.log('Set time');
        await mainPage.setExpiration('10 Minutes');
        console.log('Set name');
        await mainPage.setPasteName(pasteName);  
        console.log('Click save');
        const pastePage = await mainPage.clickSave();  
        
        //* Browser page title matches Paste Name / Title
        title = await pastePage.title();
        console.log(title);
        assert.include(title, pasteName, 'Wrong title');

        //* Syntax is suspended for bash

        //* Check that the code matches the one entered in paragraph 2

    });

    //after(() => driver && driver.quit());
});