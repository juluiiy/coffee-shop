describe('MainPage', () => {
  beforeEach(() => {
    cy.visitApp();
  });
  it('should render the main page', () => {
    cy.getByDataCy('banner-title').should('contain', 'Everything You Love About Coffee');
  });
  it('should visible About Us section', () => {
    cy.getByDataCy('about-us').should('contain', 'About us');
  });
  it('should visible Our best section', () => {
    cy.getByDataCy('best-title').should('contain', 'Our best');
  });
  it('should visible best items', () => {
    cy.getByDataCy('best-post-item').should('have.length', 3);
  });
});
