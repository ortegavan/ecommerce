describe('login', () => {
    beforeEach(() => cy.visit('/'));

    it('should login', () => {
        cy.login('mail@mail.com', '123456');

        cy.url().should('include', '/home');
    });
});
