import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  readonly userTextBox!: Locator;
  readonly passwordTextBox!: Locator;
  readonly newUserButton: Locator;
  readonly loginButton: Locator;
  readonly userName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userTextBox = page.getByRole('textbox', { name: 'UserName' });
    this.passwordTextBox = page.getByRole('textbox', { name: 'Password' });
    this.newUserButton = page.getByRole('button', { name: 'New User' });
    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.userName = page.locator('#userName-value');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(userName: string, password: string) {
    await this.userTextBox.fill(userName);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
  }

  async getUserName() {
    this.userName;
  }



}
