/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entregra', () => {

    beforeEach(() => {
        cy.visit('minha-conta/');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha);
        })
        
    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click();
    });
});