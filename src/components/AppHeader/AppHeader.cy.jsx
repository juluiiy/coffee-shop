import AppHeader from '.';

describe('AppHeader Component', () => {
  beforeEach(() => {
    cy.mountWithProviders(<AppHeader />);
  });

  it('should render correct count of NavLinks', () => {
    cy.getByDataCy('nav-link').should('have.length', 3);
  });

  it('should render LoginButton', () => {
    cy.getByDataCy('login-button').should('exist');
  });
  it('should navigate when clicking Login Button', () => {
    cy.getByDataCy('login-button').should('exist');
    cy.getByDataCy('login-button').click();
  });
});
