import { type Locator, type Page } from '@playwright/test';

export class RegisterUserPage {

  private page: Page;
  readonly firstNameTextBox: Locator;
  readonly lastNameTextBox: Locator;
  readonly userTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly registerButton: Locator;
  readonly backToLoginButton: Locator;
  


  constructor(page: Page) {
    this.page = page;
    this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
    this.userTextBox = page.getByRole('textbox', { name: 'UserName' });
    this.passwordTextBox = page.getByRole('textbox', { name: 'Password' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.backToLoginButton = page.getByRole('button', { name: 'Back to Login' });

  }

  async goto() {
    await this.page.goto('/register');
  }

  async registerNewUser(firstName: string, lastName: string, password: string) {
    const username = `Usuario${Date.now()}`;
    await this.firstNameTextBox.fill(firstName);
    await this.lastNameTextBox.fill(lastName);
    await this.userTextBox.fill(username);
    await this.passwordTextBox.fill(password);

    console.log('Nuevo usuario Creado: ' + username);

  }

  async confirmRegister() {
    await this.registerButton.click();

  }
}
