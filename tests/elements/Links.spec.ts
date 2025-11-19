import { test, expect } from '@playwright/test';
import { LinksPage } from '../../pages/elements/LinksPage';

test('Verificar funcionalidad de links', async ({ page, context }) => {
    const linksPage = new LinksPage(page);
    await linksPage.goto();

    // Escucha TODAS las nuevas páginas que se abran
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),   // Captura la nueva pestaña
        linksPage.selectHomeLink()      // Hace clic en el link
    ]);

    // Espera a que cargue, si la pestaña sigue viva
    if (!newPage.isClosed()) {
        await newPage.waitForLoadState('domcontentloaded');
    }

    // Validación: que la nueva página exista y tenga URL válida
    expect(newPage.url()).toContain('demoqa.com');
});
