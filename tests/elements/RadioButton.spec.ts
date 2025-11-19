import { test, expect } from '@playwright/test';
import { RadioButtonPage } from '../../pages/elements/RadioButtonPage';


test('Seleccionar Radio Button', async ({ page }) => {
    const radioButtonPage = new RadioButtonPage(page);

    // Navega a la página de radio buttons
    await radioButtonPage.goto();

    // -------------------------------------
    // Selección de opción "Yes"
    // -------------------------------------
    // Se hace clic en el *label* de "Yes" en lugar del input.
    // Esto simula mejor el comportamiento real de un usuario,
    // que suele clicar el texto antes que el círculo del radio.
    await radioButtonPage.selectYesByLabel();

    // Obtiene el texto mostrado por la página como opción seleccionada
    const op1 = await radioButtonPage.getOptionSelectedText();

    // Valida que efectivamente se haya seleccionado "Yes"
    expect(op1).toContain('Yes');


    // -------------------------------------
    // Selección de opción "Impressive"
    // -------------------------------------
    // Se repite el mismo flujo pero con el label "Impressive"
    await radioButtonPage.selectImpressiveByLabel();

    // Obtiene el texto de la opción marcada
    const op2 = await radioButtonPage.getOptionSelectedText();

    // Valida que la selección haya sido registrada correctamente
    expect(op2).toContain('Impressive');
});


