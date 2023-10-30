import { $ } from '@wdio/globals';
import Page from './page.ts';
import { Customer } from '../modal/index.ts';

class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputFirstname () { return $('input[id="customer.firstName"]'); }
    public get inputLastname () { return $('input[id="customer.lastName"]'); }
    public get inputStreet () { return $('input[id="customer.address.street"]'); }
    public get inputCity () { return $('input[id="customer.address.city"]'); }
    public get inputState () { return $('input[id="customer.address.state"]'); }
    public get inputZipcode () { return $('input[id="customer.address.zipCode"]'); }
    public get inputPhoneNum () { return $('input[id="customer.phoneNumber"]'); }
    public get inputSSN () { return $('input[id="customer.ssn"]'); }
    public get inputUsername () { return $('input[id="customer.username"]'); }
    public get inputPassword () { return $('input[id="customer.password"]'); }
    public get inputConfirm () { return $('input[id="repeatedPassword"]'); }
    public get btnRegister () { return $('input[value="Register"]'); }

    public async fillRegistrationInfo (customer: Customer) {
        await this.inputFirstname.waitForExist({timeout: 5000});
        await this.inputFirstname.setValue(customer.Firstname);
        await this.inputLastname.setValue(customer.Lastname);
        await this.inputStreet.setValue(customer.Address.Street);
        await this.inputCity.setValue(customer.Address.City);
        await this.inputState.setValue(customer.Address.State);
        await this.inputZipcode.setValue(customer.Address.Zipcode);
        await this.inputPhoneNum.setValue(customer.PhoneNum);
        await this.inputSSN.setValue(customer.SSN);
        await this.inputUsername.setValue(customer.Username);
        await this.inputPassword.setValue(customer.Password);
        await this.inputConfirm.setValue(customer.Password);
    }

    public async register () {
        await this.btnRegister.click();
    }
}

export default new RegisterPage();
