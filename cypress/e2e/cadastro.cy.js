import { faker } from '@faker-js/faker';
const randomName = faker.person.fullName(); 
const randomEmail = faker.internet.email();
const randomSenha = faker.string.alphanumeric(6);
describe('testes tela de cadastro', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="botao-cadastro"]').click()
  });
  
  context('criação de conta com sucesso', () => {
    it('criação de conta valida', () => {
        cy.getByData('nome-input').type(randomName);
        cy.getByData('email-input').type(randomEmail);
        cy.getByData('senha-input').type(randomSenha, {log: false});
        cy.getByData('checkbox-input').check();
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist')
          .and('have.text', 'Usuário cadastrado com sucesso!');
      
      });
    });
      
  context('teste de validações na criação de conta', () => {
      it('campo de nome em branco', () => {
          cy.getByData('email-input').type(randomEmail);
          cy.getByData('senha-input').type(randomSenha, {log: false});
          cy.getByData('checkbox-input').check();
          cy.getByData('botao-enviar').click();
          cy.getByData('mensagem-erro').should('be.visible')
            .and('have.text', 'O campo de nome é obrigatório');
      });

      it('campo email invalido ', () => {
        cy.getByData('nome-input').type(randomName);
        cy.getByData('email-input').type('vasco123');
        cy.getByData('senha-input').type(randomSenha, {log: false});
        cy.getByData('checkbox-input').check();
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-sucesso').should('not.exist');
      });


    })

})