import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const pageObjects = require('../page_objects/dadosPO.js');

before(function () {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
});

beforeEach(() => {
Given('que eu acesso a pagina inicial do site de Automação', () => {
    cy.visit('')
    cy.title().should('contain', 'Automação com Batista');
});
})

When('clicar na opção para começar automação web', () => {
    cy.get('a').contains('Começar Automação Web').click()
});

Then('devo ser redirecionado para a Home do site', () => {
    cy.get('h5').contains('Bem vindo ao Site de Automação do Batista.').click()
});

Given('que eu preencho o formulário para cadastrar um novo usuário', () => {
    pageObjects.PreencheCadastro();
});

When('finalizar o cadastro', () => {
    cy.get('input[name=commit').click()
    cy.wait(2000)
});

Then('devo visualizar a mensagem que o usuário foi cadastrado com sucesso', () => {
    cy.get('#notice').should('contain', 'Usuário Criado com sucesso')
});

Given('que eu seleciono um Usuário já cadastrado', () => {
    pageObjects.SelecionaUsuarioNoGrid();
    cy.wait(2000)
});

When('alterar os dados do usuário', () => {
    pageObjects.EditaRegistroDoUsuario();
    cy.get('input[name=commit]').click()
    cy.wait(2000)
});

Then('devo visualizar o registro atualizado do usuário', () => {
    cy.get('#notice').should('contain', 'Seu Usuário foi Atualizado!')
});

Given('que eu excluo um Usuário', () => {
    pageObjects.SelecionaUsuarioParaExclusao();
    cy.wait(2000)
});

Then('o usuário é removido da lista', () => {
    cy.get('#notice').should('contain', 'Seu Usuário foi removido com sucesso!')

    cy.get('div').find('>a').filter('.btn').first().tab().click()
});

Given('que eu abro o Calendário', () => {
    pageObjects.AbreCalendario();
    cy.wait(2000)
});

When('selecionar a data de 01 de maio de 2019 no Datapicker', () => {
    cy.get('#datepicker').click()
    cy.wait(2000)
    cy.get('td').find('>button').filter('.datepicker-day-button').first().click()
    cy.get('button').contains('Ok').click()
});

Then('devo visualizar a data selecionada na tela', () => {
    cy.wait(2000)
    cy.get('p').find('>input').should('have.value', 'May 01, 2019')

});

Given('que eu acesso Drag and Drop no Menu de Iterações', () => {
    pageObjects.AcessaDragAndDrop();
});

When('segurar e arrastar a imagem', () => {
    cy.wait(2000)

    cy.wait(1000).get('#winston').eq(0)
    .wait(300).trigger('mousedown', {which: 1, pageX: 0, pageY: 0})
    .wait(300).trigger('mousemove', {which: 1, pageX: 230, pageY: 34})
    .wait(300).trigger('mouseup', {force:true})

});

Then('devo visualizar a imagem no local correto', () => {
    cy.get('#dropzone')
    .should('have.css', 'background-color')
    .and('eq', 'rgb(0, 200, 0)')
});