/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Capabilities {


    static Chrome = {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['disable-gpu']
        }
    }

    static ChromeHeadless = {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu']
        }
    }

    static Firefox = {
        browserName: 'firefox'
    }
}
