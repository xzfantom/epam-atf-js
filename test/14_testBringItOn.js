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
        const syntaxName = 'Bash';

        this.timeout(30000);

        const mainPage = new MainPage(driver);

        await mainPage.open();

        await mainPage.writePaste(pasteString);

        await mainPage.setSyntaxHighlight(syntaxName);

        await mainPage.setExpiration('10 Minutes');

        await mainPage.setPasteName(pasteName);  

        const pastePage = await mainPage.clickSave();  
        
        //* Browser page title matches Paste Name / Title
        const title = await pastePage.title();
        assert.include(title, pasteName, 'Wrong title');

        //* Syntax is suspended for bash
        const syntax = await pastePage.getHighlightName();
        assert.equal(syntax, syntaxName);

        //* Check that the code matches the one entered in paragraph 2
        const code = await pastePage.getRawPasteText();
        assert.equal(code, pasteString);
  
    });

    after(() => driver && driver.quit());
});