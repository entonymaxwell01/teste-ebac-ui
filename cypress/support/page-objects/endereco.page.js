class EnderecoPage {

    editarEnferecoFaturamento(firstName, lastName, empresa, country, address, number, city, state, cep, phoneNumber, email) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click();
        cy.get(':nth-child(1) > .title > .edit').click();
        cy.get('#billing_first_name').clear().type(firstName);
        cy.get('#billing_last_name').clear().type(lastName);
        cy.get('#billing_company').clear().type(empresa);

        cy.get('#select2-billing_country-container').click().type(`${country}{enter}`);
        cy.get('#billing_address_1').clear().type(address);
        cy.get('#billing_address_2').clear().type(number);
        cy.get('#billing_city').clear().type(city);
        cy.get('#select2-billing_state-container').click().type(`${state}{enter}`);
        cy.get('#billing_postcode').clear().type(cep);
        cy.get('#billing_phone').clear().type(phoneNumber);
        cy.get('#billing_email').clear().type(email);
        cy.get('.button').click();

    }

    editarEnderecoEntrega(){
        
    }
}

export default new EnderecoPage();