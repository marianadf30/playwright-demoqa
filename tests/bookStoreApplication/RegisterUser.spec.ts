import { test, expect } from '@playwright/test';
import { RegisterUserPage } from '../../pages/bookStoreApplication/RegisterUserPage';


test('Registro de nuevo usuario', async ({ page }) => {

  // Instancia la página de registro desde el POM
  const registerPage = new RegisterUserPage(page);

  // Navega a la página de registro
  await registerPage.goto();

  // Completa los datos del formulario (nombre, apellido y contraseña)
  await registerPage.registerNewUser('First Name', 'Last Name', 'Password123$');

  // Mensaje informativo para el usuario en la consola
  console.log('***Resuelve el captcha manualmente. Se abrirá el Playwright Inspector.');

  // Pausa la ejecución y abre el Playwright Inspector para resolver el captcha
  await page.pause();

  // Reanuda el test después de resolver el captcha y hace clic en el botón Register
  await registerPage.confirmRegister();

  // Verifica opcionalmente que la URL sigue siendo la página de registro
  await expect(page).toHaveURL(/register/);
});
