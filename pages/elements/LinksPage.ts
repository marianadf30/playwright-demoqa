import { type Locator, type Page } from '@playwright/test';

export class LinksPage {
    readonly page: Page;
    readonly homeLink: Locator;

    constructor(page: Page) {
        this.page = page;

        // Localiza el link que tiene el nombre "Home"
        this.homeLink = page.getByRole('link', { name: 'Home', exact: true });
    }

    async goto() {
        // Navega a la página Links
        await this.page.goto('/links');
    }

    async selectHomeLink() {
        // Hace clic en el link Home
        await this.homeLink.click();
    }
}
