import { type Locator, type Page } from '@playwright/test';

export class BookStorePage {

  readonly page: Page;
  readonly searchBox: Locator;
  readonly bookTitleLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('#searchBox');
    this.bookTitleLinks = page.locator('.rt-tbody .rt-tr-group a');
  }

  async goto() {
    await this.page.goto('/books');
  }

  async searchBook(text: string) {
    await this.searchBox.fill(text);
  }

  async getResultsCount() {
    return await this.bookTitleLinks.count();
  }

  async getFirstBookTitle() {
    return await this.bookTitleLinks.first().innerText();
  }
}
