/// <reference types="cypress" /> 
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pre Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/');
    });
    it('Deve completar o pre cadastro com sucesso', () => {
        let email = faker.internet.email();
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();

        cy.get('#reg_email').type(email);
        cy.get('#reg_password').type('!teste@teste&');
        cy.get(':nth-child(4) > .button').click();

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(firstName);
        cy.get('#account_last_name').type(lastName);
        cy.get('.woocommerce-Button').click();
    });

    it.only('Deve completar o pre cadastro com sucesso - Usando comandos customizados', () => {
        cy.preCadastro(faker.internet.email(),faker.internet.password(),faker.person.firstName(),faker.person.lastName());
    });
});