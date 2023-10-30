import { $ } from '@wdio/globals';
import Page from './page.ts';

class HomePage extends Page {
    public get inputUsername () { return $('input[name="username"]'); }
    public get inputPassword () { return $('input[name="password"]'); }
    public get btnLogin () { return $('input[value="Log In"]'); }
    public get aForgotPassword () { return $('a=Forgot login info?'); }
    public get aRegister () { return $('a=Register'); }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    public async register () {
        await this.aRegister.click();
    }

    public async forgotPassword () {
        await this.aForgotPassword.click();
    }
}

export default new HomePage();
