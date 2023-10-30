import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    public get message () { return $('#rightPanel').$('p'); }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://parabank.parasoft.com${path}`)
    }

    public async getMessage (): Promise<string> {
        await this.message.waitForExist({
            timeout: 3000,
            timeoutMsg: 'Message not displayed'
        });
        return await this.message.getText();
    }
}
