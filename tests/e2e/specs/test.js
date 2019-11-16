// https://docs.cypress.io/api/introduction/api.html

describe('Gameboard tests', () => {
  it('When the game loads there is a chess board', () => {
    cy.visit('localhost:8080');
    cy.get('.chessboard');
  });
  it('Chess board should have 64 tiles', () =>{
    cy.get('.chessboard')
      .find('.chessboard_tile')
      .its('length')
      .should('eq', 64);
  });

});
