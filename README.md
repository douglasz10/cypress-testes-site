# cypress-testes-site
Essa aplicação de Testes Automatizados servirá como auxílio no aprendizado para testes e2e utilizando Cypress com Cucumber.

Primeiramente criamos um novo repositório e iniciarmos com $npm init.

Instalando o Cypress
npm install cypress --save-dev

Instalando o plugin do Cucumber
npm install --save-dev cypress-cucumber-preprocessor

Adicionando o plugin
cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

Utilizo o arquivo .feature para escrever os Gherkins
