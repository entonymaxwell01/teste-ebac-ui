/// <reference types="cypress" />

context('Funcionalidade Login',() => {
  it('Deve fazer login com sucesso', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.page-title').should('contain', 'Minha conta')
  })

  it('Deve exibir mensagem de erro ao inserir o usuario inválido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('emailqualquer@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
    
})

  it('Deve exibir mensagem de erro ao inserir senha inválido', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('senhaerrada')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should('contain','A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
      
  })
})