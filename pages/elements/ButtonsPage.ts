import { type Locator, type Page } from '@playwright/test';

export class ButtonsPage {
  readonly page: Page;
  readonly doubleClickBotton: Locator;
  readonly rightClickButton: Locator;
  readonly clickButton: Locator;
  readonly doubleText: Locator;
  readonly rightText: Locator;
  readonly clickText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.doubleClickBotton = page.getByRole('button', { name: 'Double Click Me' });
    this.rightClickButton = page.getByRole('button', { name: 'Right Click Me' });
    this.clickButton = page.getByRole('button', { name: 'Click Me', exact: true });
    this.doubleText = page.locator('#doubleClickMessage');
    this.rightText = page.locator('#rightClickMessage');
    this.clickText = page.locator('#dynamicClickMessage');
  }
  async goto() {
    await this.page.goto('/buttons');
  }

  async selectDoubleClickButton() {
    await this.doubleClickBotton.dblclick();

  }
  async selectRightClickButton() {
    await this.rightClickButton.click({ button: 'right' });

  }
  async selectClickButton() {
    await this.clickButton.click();

  }

  async getDoubleCSelectedText(): Promise<string | null> {
    return this.doubleText.textContent();

  }
  async getRightCSelectedText(): Promise<string | null> {
    return this.rightText.textContent();

  }
  async getClickSelectedText(): Promise<string | null> {
    return this.clickText.textContent();

  }

}