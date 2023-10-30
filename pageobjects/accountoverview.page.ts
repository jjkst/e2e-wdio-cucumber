import { $ } from '@wdio/globals';
import Page from './page.ts';

class AccountOverviewPage extends Page {
    public get h1title () { return $('h1[class="title"]'); }
    public get alogout () { return $('a=Log Out'); }

    public async init (): Promise<boolean> {
        return await this.h1title.getText() === "Accounts Overview";
    }

    public async logout () {
        await this.alogout.waitForClickable({
            timeout: 3000,
            timeoutMsg: 'logout link is not clickable'
        });
        await this.alogout.click();
    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
    // public open () {
    //     return super.open('login');
    // }
}

export default new AccountOverviewPage();
