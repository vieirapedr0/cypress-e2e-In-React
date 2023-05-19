import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();
const randomSenha = faker.string.alphanumeric(6);



describe('testes tela de login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')})

    it('login válido', () => {
        cy.login(Cypress.env('email_usuario'), Cypress.env('senha_usuario'));
    });

    it('login inválido usuário inexistente', () => {
        cy.login(randomEmail, randomSenha)
        cy.contains('span', 'E-mail ou senha incorretos').should('be.visible');
    });

    it('campo email em branco', () => {
        cy.getByData('botao-login').click();
        cy.getByData('senha-input').type(randomSenha, {log: false});
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório');
    });
});


