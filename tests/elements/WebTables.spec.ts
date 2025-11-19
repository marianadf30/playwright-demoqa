import { test, expect } from '@playwright/test';
import { WebTablesPage } from '../../pages/elements/WebTablesPage';



test.describe('DemoQA - Web Tables', () => {

    // Antes de cada test: navegar a la página de Web Tables
    test.beforeEach(async ({ page }) => {
        const webTables = new WebTablesPage(page);
        await webTables.goto();
    });


    // ---------------------------------------------------------
    // Subsuite: Estructura Tabla
    // ---------------------------------------------------------
    test.describe('Estructura Tabla', () => {

        // -------------------------------
        // Validar encabezados
        // -------------------------------
        test('Validar encabezados de la tabla', async ({ page }) => {
            const webTablesPage1 = new WebTablesPage(page);

            // Obtiene la lista de headers (títulos de columnas)
            const headers = await webTablesPage1.getHeaderTable();

            // Verifica que coincidan exactamente con los esperados
            await expect(headers).toHaveText([
                'First Name',
                'Last Name',
                'Age',
                'Email',
                'Salary',
                'Department',
                'Action'
            ]);
        });


        // -------------------------------
        // Validar registros por defecto
        // -------------------------------
        test('Validar registros por defecto', async ({ page }) => {
            const webTablesPage2 = new WebTablesPage(page);

            // Obtiene el cuerpo de la tabla (todas las filas)
            const r = await webTablesPage2.getBodyTable();

            // Valida que uno de los registros por defecto contenga el apellido "Cierra"
            await expect(r).toContainText('Cierra');
        });

    });

});
