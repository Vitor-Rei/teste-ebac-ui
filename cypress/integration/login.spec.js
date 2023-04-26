/// <reference types="cypress" />

context('funcionalidade login', () =>{

    beforeEach (() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach (() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () =>{
        cy.get('.woocommerce-form > :nth-child(1) > label').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá,')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido' , () =>{
        cy.get('.woocommerce-form > :nth-child(1) > label').type('aluno_ebac@thdste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida' , () =>{
        cy.get('.woocommerce-form > :nth-child(1) > label').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@4este.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })
})