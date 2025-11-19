import { test, expect } from '@playwright/test';
import { AlertPage } from '../../pages/alertsFrameWindows/AlertsPage';



test.describe('DemoQA - Alerts', () => {

    // Antes de cada test: navegar a la página de Alert
    test.beforeEach(async ({ page }) => {
        
        await new AlertPage(page).goto();
    });


    test('Probar popup con delay', async ({ page }) => {

        const alertPage1 = new AlertPage(page);
        await alertPage1.selectButtonDelay();

        // Espera automática a que aparezca un alert (dialog)
        const dialog = await page.waitForEvent('dialog');

        // Acepta en popup
        console.log(dialog.message());
        await dialog.accept();
    });

    test('Probar prompt', async ({ page }) => {

        const alertPage2 = new AlertPage(page);

        const dialogPromise = page.waitForEvent('dialog');

        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept('Mariana');
        });

        await alertPage2.selectButtonPromt();

        // Validar en la página el resultado del prompt
        await expect(alertPage2.promtResult).toContainText('Mariana');


    });
});
