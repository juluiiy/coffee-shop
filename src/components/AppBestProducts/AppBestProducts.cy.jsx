import { postItems } from '../../constants';
import AppBest from '.';

describe('AppBest Component', () => {
  beforeEach(() => {
    cy.mountWithProviders(<AppBest />);
  });

  it('should render correct count of best posts', () => {
    cy.getByDataCy('best-post-item').should('have.length', 3);
  });

  it('should render each post with correct details', () => {
    cy.getByDataCy('best-post-item').each((item, index) => {
      cy.wrap(item).within(() => {
        cy.getByDataCy('best-post-title').should('contain.text', postItems[index].title);
      });
    });
  });
});
