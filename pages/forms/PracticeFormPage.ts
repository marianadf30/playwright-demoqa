import { type Locator, type Page } from '@playwright/test';

export class PracticeFormPage {
    readonly page: Page;
    readonly firstNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly emailTextBox: Locator;
    //readonly genderRadioButton: Locator;
    readonly mobileNumberTextBox: Locator;
    //readonly dateOfBirthTextBox: Locator;
    readonly subjectTextBox: Locator;

    readonly currentAddressTextBox: Locator;
    //readonly stateDropDown: Locator;
    //readonly cityDropDown: Locator;
    readonly submitButton: Locator;

    //Checks Hobbies y sus labels, capturamos clcik en label ya que los banner interfieren
    readonly hobbySportCheck: Locator;
    readonly hobbyReadingCheck: Locator;
    readonly hobbyMusicCheck: Locator;
    readonly hobbySportsLabel: Locator;
    readonly hobbyReadingLabel: Locator;
    readonly hobbyMusicLabel: Locator;



    //RadioButton Gender y sus labels, capturamos clcik en label ya que los banner interfieren
    readonly gendeMaleRadioB: Locator;
    readonly gendeFemaleRadioB: Locator;
    readonly gendeOtherRadioB: Locator;
    readonly genderMaleLabel: Locator;
    readonly genderFemaleLabel: Locator;
    readonly genderOtherLabel: Locator;



    //Picture????


    constructor(page: Page) {
        this.page = page;
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
        this.emailTextBox = page.getByRole('textbox', { name: 'name@example.com' });
        this.subjectTextBox = page.locator('.subjects-auto-complete__value-container');
        this.currentAddressTextBox = page.getByRole('textbox', { name: 'Current Address' });
        this.mobileNumberTextBox = page.getByRole('textbox', { name: 'Mobile Number' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        //Checks Hobbies
        this.hobbySportCheck = page.locator('#hobbies-checkbox-1');
        this.hobbyReadingCheck = page.locator('#hobbies-checkbox-2');
        this.hobbyMusicCheck = page.locator('#hobbies-checkbox-3');
        this.hobbySportsLabel = page.locator('label[for="hobbies-checkbox-1"]');
        this.hobbyReadingLabel = page.locator('label[for="hobbies-checkbox-2"]');
        this.hobbyMusicLabel = page.locator('label[for="hobbies-checkbox-3"]');
        //Radio button Gender
        this.gendeMaleRadioB = page.locator('#gender-radio-1');
        this.gendeFemaleRadioB = page.locator('#gender-radio-2');
        this.gendeOtherRadioB = page.locator('#gender-radio-3');
        this.genderMaleLabel = page.locator('label[for="gender-radio-1"]');
        this.genderFemaleLabel = page.locator('label[for="gender-radio-2"]');
        this.genderOtherLabel = page.locator('label[for="gender-radio-3"]');




    }

    async goto() {
        await this.page.goto('/automation-practice-form');
    }

    async fillForm(firstName: string, lastName: string, email: string, subjects: string, currentAddress: string, mobileNumber: string) {
        await this.firstNameTextBox.fill(firstName);
        await this.lastNameTextBox.fill(lastName);
        await this.emailTextBox.fill(email);
        await this.currentAddressTextBox.fill(currentAddress);
        //await this.subjectTextBox.fill(subjects);
        await this.mobileNumberTextBox.fill(mobileNumber);

    }



    async selectHobby(labelLocator: Locator) {
        await labelLocator.click();
    }

    async isHobbyChecked(hobbyLocator: Locator) {
        return await hobbyLocator.isChecked();
    }


    async selectGender(labelLocator: Locator) {
        await labelLocator.click();
    }

    async isGenderChecked(genderLocator: Locator) {
        return await genderLocator.isChecked();
    }



    async getSubmitButton() {
        return this.submitButton;
    }
    /*
        async getOutputBox() {
            return this.outputBox;
        } */
}
