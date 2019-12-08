// https://docs.cypress.io/api/introduction/api.html

describe('PersoList', () => {
  it('Visits the home page', () => {
    cy.visit('/');
    cy.get('h3').contains('Welcome to the lotr-battle');
  });
  it('Fight with persos', () => {
    cy.get('.form-control').type('select');
    cy.get('.btn btn-dark').click();

  });
  it('Create a perso', () => {
    cy.get('.perso__input').type('input');
    cy.get('.btn-dark').click();

  });
  it('Show the list of persos', () => {
    cy.get('.name').should('have.lenght');
    cy.get('.traits').should('have.lenght');
    cy.get('.health').should('have.number');
    cy.get('.attack').should('have.number');

  });

});
