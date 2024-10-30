import React from 'react';

import AppInfo from '.';

describe('AppInfo Component', () => {
  it('renders correctly', () => {
    cy.mount(<AppInfo />);

    cy.getByDataCy('about-us').contains('About us');
  });
});
