/// <reference types="cypress" />

describe("Funcionalidade Pagina de produtos", () => {
  beforeEach(() => {
    cy.visit("produtos/");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]').first().click();
  });

  it("Deve adicionar um produto ao carrinho", () => {
    var quant = 3;

    cy.get('[class="product-block grid"]').first().click();
    cy.get('.button-variable-item-M').click();
    cy.get('.button-variable-item-Green').click();
    cy.get('.input-text').clear().type(quant);
    cy.get('.single_add_to_cart_button').click();

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quant);
    cy.get('.woocommerce-message').should('contain',`${quant} × “Abominable Hoodie” foram adicionados no seu carrinho.`);
  });

  it.only("Deve adicionar um produto ao carrinho - Usando Comando Customizado", () => {
    cy.addProdutos('Abominable Hoodie','M','Red',  5);
  });
});
