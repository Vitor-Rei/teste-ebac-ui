/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () =>{


    beforeEach(() =>{
        cy.visit('minha-conta')
    })

    it('Deve completar o pré cadastro com sucesso', () =>{
        let sobrenomeFaker = faker.name.lastName()
        let nomeFaker = faker.name.firstName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('.register > :nth-child(2) > label').type('Vpsespt@2021')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

        
    });
});