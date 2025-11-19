import { type Locator, type Page } from '@playwright/test';

export class TextBoxPage {
  readonly page: Page;
  readonly fullNameTextBox: Locator;
  readonly emailTextBox: Locator;
  readonly currentAddressTextBox: Locator;
  readonly permanentAddressTextBox: Locator;
  readonly submitButton: Locator;
  readonly outputBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameTextBox = page.locator('#userName');
    this.emailTextBox = page.locator('#userEmail');
    this.currentAddressTextBox = page.locator('#currentAddress');
    this.permanentAddressTextBox = page.locator('#permanentAddress');
    this.submitButton = page.getByRole('button',{name: 'Submit'});
    this.outputBox = page.locator('#output');

    //Podria hacerce por placeholder
    //this.emailTextBox = page.getByPlaceholder('name@example.com');

  }

  async goto() {
    await this.page.goto('/text-box');
  }

  async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.fullNameTextBox.fill(fullName);
    await this.emailTextBox.fill(email);
    await this.currentAddressTextBox.fill(currentAddress);
    await this.permanentAddressTextBox.fill(permanentAddress);

  }
  async getSubmitButton() {
    return this.submitButton;
  }

  async getOutputBox() {
    return this.outputBox;
  }
}
