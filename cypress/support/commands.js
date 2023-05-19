Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
  });

  Cypress.Commands.add('login', (email, senha) =>{
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type(email);
    cy.getByData('senha-input').type(senha, {log: false});
    cy.getByData('botao-enviar').click();
  });