import { type Locator, type Page } from '@playwright/test';

export class WebTablesPage {
    readonly page: Page;

    readonly table: Locator;
    readonly headertable: Locator;
    readonly bodytable: Locator;

    readonly addbutton: Locator;
    readonly firstnameRow: Locator;
    readonly lastnameRow: Locator;
    readonly emailRow: Locator;
    readonly ageRow: Locator;
    readonly salaryRow: Locator;
    readonly departmentRow: Locator;
    readonly submitButton: Locator;
    readonly searchTexBox: Locator;
    readonly pdropdown: Locator;


    constructor(page: Page) {
        this.page = page;
        this.table = page.locator('.rt-tr-group');
        this.headertable = page.locator('.rt-thead .rt-th');
        this.bodytable = page.locator('.rt-tbody');
        this.addbutton = page.getByRole('button', { name: 'Add' });

        //Alta
        this.firstnameRow = page.getByPlaceholder('First Name');
        this.lastnameRow = page.getByPlaceholder('Last Name');
        this.emailRow = page.getByPlaceholder('name@example.com');
        this.ageRow = page.getByPlaceholder('Age');
        this.salaryRow = page.getByPlaceholder('Salary');
        this.departmentRow = page.getByPlaceholder('Department');
        this.submitButton = page.getByRole('button', { name: 'Submit' });


        this.searchTexBox = page.getByRole('textbox', { name: 'Type to search' });

        this.pdropdown = page.getByLabel('rows per page');

    }

    async goto() {
        await this.page.goto('/webtables');
    }
    async getTable() {
        return this.table;

    }
    async getHeaderTable() {
        return this.headertable;

    }
    async getBodyTable() {
        return this.bodytable;

    }

    async addPeople(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
        //Hago Add 
        await this.addbutton.click();

        //Cargo registro
        await this.firstnameRow.fill(firstName);
        await this.lastnameRow.fill(lastName);
        await this.emailRow.fill(email);
        await this.departmentRow.fill(department);
        await this.ageRow.fill(age);
        await this.salaryRow.fill(salary);

        //Hago Submit para persistir registro
        await this.submitButton.click();


    }
    async editPeople(lastName: string) {
        const cantRows = await this.table.count();
        if (cantRows > 0) {
            //Recupero fila 1
            const row1 = this.table.first();

            //Abro el modal de edición fila 1
            await row1.locator('[title="Edit"]').click();

            //Modifico 'lastName'
            await this.lastnameRow.fill(lastName);

            //Hago Submit para persistir registro
            await this.submitButton.click();

        }

    }

    async deletePeople() {
        const cantRows = await this.table.count();
        if (cantRows > 0) {
            //Recupero fila 1
            const row1 = this.table.first();
            //Recupero email para verificar
            const email = await row1.locator('.rt-td').nth(3).textContent(); //
            //Abro el modal de edición fila 1
            await row1.locator('[title="Delete"]').click();
            //await this.page.getByRole('button', { name: 'Delete' }).first().click();


            return email;

        }
    }

    async search(filtro: string) {
        await this.searchTexBox.fill(filtro);

    }

    async setRowsPerPage(cantrows: string) {
        await this.pdropdown.selectOption('5 rows');

    }





}

