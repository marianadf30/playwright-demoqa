import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../../pages/elements/TextBoxPage';

test('llenar formulario Text Box', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);

  // Abre la página del formulario
  await textBoxPage.goto();

  // Completa el formulario con datos de ejemplo
  await textBoxPage.fillForm(
    'Susana',
    'test@example.com',
    'Calle Falsa 123',
    'Calle Verdadera 456'
  );

  // Obtiene el botón de "Submit"
  const submit = await textBoxPage.getSubmitButton();

  // Hace clic forzado por si el botón está parcialmente tapado
  await submit.click({ force: true });

  // Obtiene el cuadro de salida donde se muestran los datos enviados
  const output = await textBoxPage.getOutputBox();

  // Valida que el nombre y el email aparezcan en el resultado
  await expect(output).toContainText('Susana');
  await expect(output).toContainText('test@example.com');
});

