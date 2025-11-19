import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/bookStoreApplication/LoginPage';
import { BookStorePage } from '../../pages/bookStoreApplication/BookStorePage';

test('Filtrar libros en Book Store', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const bookStore = new BookStorePage(page);

  // Ir al login
  await loginPage.goto();
  await loginPage.login('Analia', 'Password123$');

  // Ir a Book Store
  await bookStore.goto();

  // Buscar "lea"
  await bookStore.searchBook('lea');

  // Validar que aparece 1 solo resultado
  const count = await bookStore.getResultsCount();
  expect(count).toBe(1);

  // Validar el título del único resultado
  const title = await bookStore.getFirstBookTitle();
  expect(title).toContain('Learning JavaScript');

});
