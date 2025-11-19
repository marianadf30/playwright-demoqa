import { type Locator, type Page } from '@playwright/test';

// ----------------------------------------------------------------------
// New Tab que se abre desde BrowserWindows con click sobre botón ´New Tab 
// ----------------------------------------------------------------------
export class SamplePage {
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('h1');
    }

    async getTitle() {
        return this.title;
    }
}
