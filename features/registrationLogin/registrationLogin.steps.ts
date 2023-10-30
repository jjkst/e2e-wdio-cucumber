import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';

import { Customer } from '../../modal/index.js';
import RegisterPage from '../../pageobjects/register.page.ts'
import HomePage from '../../pageobjects/home.page.ts';
import AccountOverviewPage from '../../pageobjects/accountoverview.page.ts';

Given(/^Navigate to parabank home page$/, async () => {
    await HomePage.open('/');
});

Given(/^Click on Register$/, async () => {
    await HomePage.register();
});

Given(/^Logout if I already logged in$/, async () => {
    if (await AccountOverviewPage.alogout.isDisplayed()) {
        await AccountOverviewPage.logout();
    }
});

When(/^Fill all the required information and click on Submit$/, async () => {
    const customer = new Customer();
    customer.setDefaultValues();
    await RegisterPage.fillRegistrationInfo(customer);
    await RegisterPage.register();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await HomePage.login(username, password);
});

Then(/^New user should be registered successfully saying (.*)$/, async (message) => {
    const successMessage = await RegisterPage.getMessage();
    expect(successMessage).to.equal(message);
});

Then(/^I should see message saying (.*)$/, async (message) => {
    if (message == 'success') {
        expect(await AccountOverviewPage.init()).to.equal(true);
    }
    else {
        expect(await AccountOverviewPage.init()).to.equal(false);
        const errorMessage = await AccountOverviewPage.getMessage();
        expect(errorMessage).to.equal(message);
    }
});
