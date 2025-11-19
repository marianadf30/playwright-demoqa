import { type Locator, type Page } from '@playwright/test';

export class RadioButtonPage {
  readonly page: Page;
  readonly yesLabel: Locator;
  readonly impressiveLabel: Locator;
  readonly noLabel: Locator;
  readonly optionSelected: Locator;

  constructor(page: Page) {
    this.page = page;
    this.yesLabel = page.locator('label[for="yesRadio"]');
    this.impressiveLabel = page.locator('label[for="impressiveRadio"]');
    this.noLabel = page.locator('label[for="noRadio"]');
    this.optionSelected = page.locator('.text-success');

  }
  async goto() {
    await this.page.goto('/radio-button');
  }

  async selectYesByLabel() {
    await this.yesLabel.click();

  }
   async selectImpressiveByLabel() {
    await this.impressiveLabel.click();

  }

  async getOptionSelectedText(): Promise<string | null> {
    return this.optionSelected.textContent();
  }
}

