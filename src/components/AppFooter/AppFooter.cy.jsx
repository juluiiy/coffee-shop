import React from 'react';

import AppFooter from '.';

describe('AppFooter Component', () => {
  beforeEach(() => {
    cy.mountWithProviders(<AppFooter />);
  });

  it('should render correct count of NavLinks', () => {
    cy.getByDataCy('nav-link').should('have.length', 3);
  });

  it('should render the footer image', () => {
    cy.getByDataCy('footer-image').should('exist');
  });
});
