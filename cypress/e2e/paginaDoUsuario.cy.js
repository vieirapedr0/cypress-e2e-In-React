describe('telas do usuario', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.login(Cypress.env('email_usuario'), Cypress.env('senha_usuario'))
    });
    

    it('deve ir para a tela de cartões', () => {
        cy.getByData('app-home').find('a').eq(1).click();
        cy.getByData('titulo-cartoes').should('be.visible')
     });
     it('deve ir para tela de serviços', () => {
        cy.getByData('app-home').find('a').eq(2).click();
        cy.get('.Servicos_wrapper__m4yJs').contains('div', 'Meus cartões').should('be.visible');
        
     });
     it('deve ir para tela de investimentos', () => {
        cy.getByData('app-home').find('a').eq(3).click();
        cy.get('.Investimentos_wrapper__MIiFc').contains('div', 'Investimentos').should('be.visible');
     });
})