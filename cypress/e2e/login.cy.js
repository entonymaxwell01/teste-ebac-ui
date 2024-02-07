/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login',() => {

  beforeEach(() => {
    cy.visit('minha-conta/')
  })

  afterEach(() => {
    // cy.screenshot()
  })

  it('Deve fazer login com sucesso', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.page-title').should('contain', 'Minha conta')
  })

  it('Deve fazer login com sucesso - usando arquivo de massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain', 'Minha conta')
  })

  it.only('Deve fazer login com sucesso - usando fixture', () => {
      cy.fixture('perfil').then(dados => {
          cy.get('#username').type(dados.usuario)
          cy.get('#password').type(dados.senha, {log: false})
          cy.get('.woocommerce-form > .button').click()
          cy.get('.page-title').should('contain', 'Minha conta')
      })
  })

  it('Deve exibir mensagem de erro ao inserir o usuario inválido', () => {
    cy.get('#username').type('emailqualquer@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
    
})

  it('Deve exibir mensagem de erro ao inserir senha inválido', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('senhaerrada')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should('contain','A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
      
  })
})