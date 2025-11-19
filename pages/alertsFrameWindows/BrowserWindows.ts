
import { type Locator, type Page } from '@playwright/test';

export class BrowserWindows {

    readonly page: Page;
    readonly tabButton: Locator;
    readonly title: Locator;


    constructor(page: Page) {
        this.page = page;
        this.tabButton = page.locator('#tabButton');
        this.title = page.locator('h1');
    }

    async getTitle() {
        return this.title;
    }




    async goto() {
        await this.page.goto('/browser-windows');
    }


    async selectTabButton() {
        return await this.tabButton.click();
    }
}

