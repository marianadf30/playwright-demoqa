import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../../pages/elements/ButtonsPage';
test('Verificar funcionalidad click en botones', async ({ page }) => {

    // Instancia la página de Buttons usando el POM
    const buttonsPage = new ButtonsPage(page);

    // Navega a la URL de los botones
    await buttonsPage.goto();

    // -------------------------
    // 🔵 DOUBLE CLICK
    // -------------------------

    // Realiza un doble clic sobre el botón correspondiente
    await buttonsPage.selectDoubleClickButton();

    // Obtiene el texto que aparece tras el doble clic
    const opd = await buttonsPage.getDoubleCSelectedText();

    // Verifica que el mensaje sea el esperado
    expect(opd).toContain('You have done a double click');


    // -------------------------
    // 🟣 RIGHT CLICK
    // -------------------------

    // Realiza un clic derecho sobre el botón correspondiente
    await buttonsPage.selectRightClickButton();

    // Obtiene el texto que aparece tras el clic derecho
    const opr = await buttonsPage.getRightCSelectedText();

    // Verifica que el mensaje sea el esperado
    expect(opr).toContain('You have done a right click');


    // -------------------------
    // 🟢 SINGLE CLICK
    // -------------------------

    // Realiza un clic normal (click simple)
    await buttonsPage.selectClickButton();

    // Obtiene el texto que aparece tras el clic simple
    const opc = await buttonsPage.getClickSelectedText();

    // Verifica que el mensaje sea el esperado
    expect(opc).toContain('You have done a dynamic click');

});
