import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/bookStoreApplication/LoginPage';


test('Login con usuario existente', async ({ page }) => {

  // Instancio la página de Login pasándole el objeto page
  const loginPage = new LoginPage(page);

  // Navega a la URL del formulario de login
  await loginPage.goto();

  // Completa usuario + password y presiona el botón Login
  await loginPage.login('Analia', 'Password123$');

  // Verifica que el campo donde aparece el nombre de usuario se muestre
  await expect(loginPage.userName).toBeVisible();

  // Verifica que el texto mostrado sea "Analia"
  await expect(loginPage.userName).toContainText('Analia');

  // Verifica opcionalmente que, tras loguearse, la URL cambió a /profile
  await expect(page).toHaveURL(/profile/);
});