#language: en

Feature: Utilizar os recursos do site para aprender automação

    Como um QA aprendendo automação eu quero automatizar os testes para diminuir os retestes manuais

    Scenario: Entrar na página para testes de Automação Web
        Given que eu acesso a pagina inicial do site de Automação
        When clicar na opção para começar automação web
        Then devo ser redirecionado para a Home do site

    Scenario: Criar um novo usuário
        Given que eu preencho o formulário para cadastrar um novo usuário
        When finalizar o cadastro
        Then devo visualizar a mensagem que o usuário foi cadastrado com sucesso

    Scenario: Editar usuário
        Given que eu seleciono um Usuário já cadastrado
        When alterar os dados do usuário
        Then devo visualizar o registro atualizado do usuário

    Scenario: Excluir usuário
        Given que eu excluo um Usuário
        Then o usuário é removido da lista

    Scenario: Selecionar a data de 01 de maio de 2019
        Given que eu abro o Calendário
        When selecionar a data de 01 de maio de 2019 no Datapicker
        Then devo visualizar a data selecionada na tela

    Scenario: Testar o Drag and Drop
        Given que eu acesso Drag and Drop no Menu de Iterações
        When segurar e arrastar a imagem
        Then devo visualizar a imagem no local correto
