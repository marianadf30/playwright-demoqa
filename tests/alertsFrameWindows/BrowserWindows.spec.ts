import { test, expect } from '@playwright/test';
import { BrowserWindows } from '../../pages/alertsFrameWindows/BrowserWindows';
import { SamplePage } from '../../pages/alertsFrameWindows/SamplePage';




//Antes de cada test: navegar a la página Browser
test.beforeEach(async ({ page }) => {
    await new BrowserWindows(page).goto();
});

test('Verificar new Tab', async ({ page }) => {

    const browserPage1 = new BrowserWindows(page);

    // Acción que abre el nuevo tab
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        browserPage1.selectTabButton()
    ]);




    // Crear el POM del nuevo tab
    const samplePage = new SamplePage(newTab);


    // Esperar que el nuevo tab cargue
    await samplePage.page.waitForLoadState();


    // Verificar URL
    await expect(samplePage.page).toHaveURL(/.*\/sample.*/);

    // Verificar el texto de la página
    const c = await samplePage.getTitle();
    await expect(c).toHaveText('This is a sample page');
});
