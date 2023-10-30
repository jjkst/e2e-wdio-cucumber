import { browser, $ } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Functions {

    public static adminUrl = 'https://parabank.parasoft.com/parabank/admin.htm';
    public static get btnClean () { return $('button[value="CLEAN"]'); }

    public static async cleanDatabase () {
        await browser.url(this.adminUrl);
        await this.btnClean.waitForClickable({timeout: 5000});
        await this.btnClean.click();
    }
}
