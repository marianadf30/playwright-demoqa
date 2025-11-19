import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../../pages/forms/PracticeFormPage';




test('llenar formulario Practice Form', async ({ page }) => {
  const practiceFormPage = new PracticeFormPage(page);

  await practiceFormPage.goto();

  await practiceFormPage.fillForm('Susana', 'Martinez', 'test@example.com', 'Asunto', 'Calle Falsa 123', '1234567890');


  // Seleccionar un hobby por su label y verifico que el check este checkeado ********************************************//
  await practiceFormPage.selectHobby(practiceFormPage.hobbySportsLabel);
  expect(await practiceFormPage.isHobbyChecked(practiceFormPage.hobbySportCheck)).toBeTruthy();

  await practiceFormPage.selectHobby(practiceFormPage.hobbyReadingLabel);
  expect(await practiceFormPage.isHobbyChecked(practiceFormPage.hobbyReadingCheck)).toBeTruthy();

  await practiceFormPage.selectHobby(practiceFormPage.hobbyMusicLabel);
  expect(await practiceFormPage.isHobbyChecked(practiceFormPage.hobbyMusicCheck)).toBeTruthy();


//Desmarco el check sport y verifico que se desmarque
  await practiceFormPage.selectHobby(practiceFormPage.hobbySportsLabel);
  expect(await practiceFormPage.isHobbyChecked(practiceFormPage.hobbySportCheck)).not.toBeTruthy();

//**************************************************************************************************************************//

// Seleccionar un gender por su label y verifico que el radio este checkeado ********************************************//
  await practiceFormPage.selectGender(practiceFormPage.genderMaleLabel);
  expect(await practiceFormPage.isGenderChecked(practiceFormPage.gendeMaleRadioB)).toBeTruthy();

  await practiceFormPage.selectGender(practiceFormPage.genderFemaleLabel);
  expect(await practiceFormPage.isGenderChecked(practiceFormPage.gendeFemaleRadioB)).toBeTruthy();
  //Verifico que el anterior se haya desmarcado
  expect(await practiceFormPage.isGenderChecked(practiceFormPage.gendeMaleRadioB)).not.toBeTruthy();

    await practiceFormPage.selectGender(practiceFormPage.genderOtherLabel);
  expect(await practiceFormPage.isGenderChecked(practiceFormPage.gendeOtherRadioB)).toBeTruthy();
  //Verifico que el anterior se haya desmarcado
  expect(await practiceFormPage.isGenderChecked(practiceFormPage.gendeFemaleRadioB)).not.toBeTruthy();

  //**************************************************************************************************************************//









  //const submit = await practiceFormPage.getSubmitButton();
  //await submit.click({ force: true });
  /*
    const output = await textBoxPage.getOutputBox();
    await expect(output).toContainText('Susana');
    await expect(output).toContainText('test@example.com');*/
});
