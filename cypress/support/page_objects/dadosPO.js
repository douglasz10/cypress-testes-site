/// <reference types="Cypress" />
var faker = require('faker');
module.exports = {

    PreencheCadastro: function(){
        cy.get('a').contains('Formulário').click()
        cy.get('a').contains('Criar Usuários').click()
        //cy.get('input[id="user_name"]').click();
        cy.get('#user_name').type(faker.name.firstName())
        cy.get('#user_lastname').type(faker.name.lastName())
        cy.get('#user_email').type(faker.internet.email())
        cy.get('#user_address').type(faker.address.streetAddress())
        cy.get('#user_university').type("Unicamp")
        cy.get('#user_profile').type("Estudante")
        cy.get('#user_gender').type("Masculino")
        cy.get('#user_age').type("30")
    },

    SelecionaUsuarioNoGrid: function(){
        cy.get('a').contains('Formulário').click()
        cy.get('a').contains('Lista de Usuários').click()
        cy.get('td').find('>a').filter('.material-icons').first().tab().click()
    },

    SelecionaUsuarioParaExclusao: function(){
        cy.get('a').contains('Formulário').click()
        cy.get('a').contains('Lista de Usuários').click()
        cy.get('td').find('>a').filter('.material-icons').first().tab().tab().click()
    },

    EditaRegistroDoUsuario: function(){
        cy.get('#user_name').clear()
        cy.get('#user_name').type(faker.name.firstName())
        cy.get('#user_lastname').clear().type(faker.name.lastName())
        cy.get('#user_email').clear().type(faker.internet.email())
        cy.get('#user_address').clear().type(faker.address.streetAddress())
        cy.get('#user_university').clear().type("PUC")
        cy.get('#user_profile').clear().type("Estagiário")
        cy.get('#user_gender').clear().type("Masculino")
        cy.get('#user_age').clear().type("30")
    },

    AbreCalendario: function(){
        cy.get('a').contains('Widgets').click()
        cy.get('a').contains('Datapicker').click()
    },

    AcessaDragAndDrop: function(){
        cy.get('a').contains('Iterações').click()
        cy.get('a').contains('Drag And Drop').click()
    },

    moveFigura: function (number, x, y) {
        cy.get('#winston-${number}')
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientX: x, clientY: y })
          .trigger('mouseup', {force: true})
      }
}