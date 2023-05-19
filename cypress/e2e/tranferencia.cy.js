describe('Jornadas de usuário', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.login(Cypress.env('email_usuario'), Cypress.env('senha_usuario'))
    });
    it('Deve permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça um logout', () => {
      cy.location('pathname').should('eq', '/home');
  
      cy.getByData('select-opcoes').select('Transferência');
      cy.getByData('form-input').type('80');
      cy.getByData('realiza-transacao').click();
  
      cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');
  
      cy.getByData('botao-sair').click();
      cy.location('pathname').should('eq', '/');
    });
  });