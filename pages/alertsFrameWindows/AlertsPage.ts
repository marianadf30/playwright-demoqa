import { type Locator, type Page } from '@playwright/test';

export class AlertPage {

  readonly page: Page;
  readonly timerAlertButton: Locator;
  readonly promtButton: Locator;
  readonly promtResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.timerAlertButton = page.locator('#timerAlertButton');
    this.promtButton = page.locator('#promtButton');
    this.promtResult = page.locator('#promptResult');


  }

  async goto() {
    await this.page.goto('/alerts');
  }


  async selectButtonDelay() {
    return await this.timerAlertButton.click();
  }

  async selectButtonPromt() {
     return await this.promtButton.click();
  }


}
