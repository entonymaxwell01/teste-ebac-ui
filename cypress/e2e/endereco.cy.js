/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entregra', () => {

    beforeEach(() => {
        cy.visit('minha-conta/');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha);
        })
        
    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnferecoFaturamento('Joao', 'Silva', 'EBAC', 'Brasil', 'Rua 1', '123', 'São Paulo', 'São Paulo', '12345678', '11999999999', 'teste@teste.com');
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.');
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEnferecoFaturamento(dadosEndereco[0].fistName,
              dadosEndereco[0].lastName,
              dadosEndereco[0].empresa,
              dadosEndereco[0].country,
              dadosEndereco[0].address,
              dadosEndereco[0].number,
              dadosEndereco[0].city,
              dadosEndereco[0].state,
              dadosEndereco[0].zip,
              dadosEndereco[0].phoneNumber,
              dadosEndereco[0].email
            );
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.');
    });
});