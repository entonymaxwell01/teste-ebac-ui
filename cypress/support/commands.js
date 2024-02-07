// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, password) => { 
    cy.get('#username').type(user)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('preCadastro', (email,password,firstName, lastName) => {
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(password);
    cy.get(':nth-child(4) > .button').click();

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(firstName);
    cy.get('#account_last_name').type(lastName);
    cy.get('.woocommerce-Button').click();
})

Cypress.Commands.add('addProdutos', (produto,tamanho,cor,quantidade) =>{
    cy.get('[class="product-block grid"]').contains(produto).click();
    cy.get(`.button-variable-item-${tamanho}`).click();
    cy.get(`.button-variable-item-${cor}`).click();
    cy.get('.input-text').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade);
    cy.get('.woocommerce-message').should('contain',`${quantidade} × “Abominable Hoodie” foram adicionados no seu carrinho.`);
})