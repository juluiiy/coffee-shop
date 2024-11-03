describe('For your pleasure', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('nav-link').eq(2).click();
  });
  it('should render the our coffee page title', () => {
    cy.getByDataCy('header-title').should('contain', 'For your pleasure');
  });

  it('should render the our coffee page products', () => {
    cy.getByDataCy('coffee-list-item').should('have.length', 6);
  });
});
