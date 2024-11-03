const filterProperties = ['Kenya', 'Columbia', 'Brazil'];

describe('Our Coffee page', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('nav-link').eq(1).click();
  });
  it('should render the our coffee page title', () => {
    cy.getByDataCy('header-title').should('contain', 'Our coffee');
  });

  it('should render the our coffee page products', () => {
    cy.getByDataCy('coffee-list-item').should('have.length', 6);
  });
  it('should test filters ', () => {
    filterProperties.forEach((filter) => {
      cy.getByDataCy(`filter-button-${filter}`).click();
      cy.getByDataCy('coffee-list-item').should('have.length', 2);
    });
    cy.getByDataCy('filter-button-Kenya').click();
    cy.getByDataCy('coffee-list-item').should('have.length', 2);
  });
  it('should test search ', () => {
    cy.getByDataCy('search-input').type('Solimo');
    cy.getByDataCy('coffee-list-item').should('have.length', 1);
  });
});
