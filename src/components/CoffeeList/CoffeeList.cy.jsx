import { filterContext, searchContext } from '../../context';
import CoffeeList from '.';

describe('CoffeeList Component', () => {
  const postItems = [
    { id: 1, title: 'Coffee A', country: 'Brazil', price: '$10', img: 'path/to/imageA.png' },
    { id: 2, title: 'Coffee B', country: 'Colombia', price: '$12', img: 'path/to/imageB.png' },
    { id: 3, title: 'Coffee C', country: 'Ethiopia', price: '$15', img: 'path/to/imageC.png' },
    { id: 4, title: 'Coffee A', country: 'Brazil', price: '$10', img: 'path/to/imageA.png' },
    { id: 5, title: 'Coffee B', country: 'Colombia', price: '$12', img: 'path/to/imageB.png' },
    { id: 6, title: 'Coffee C', country: 'Ethiopia', price: '$15', img: 'path/to/imageC.png' },
  ];

  const searchQuery = '';
  const filter = 'all';

  beforeEach(() => {
    cy.mountWithProviders(
      <searchContext.Provider value={{ searchQuery }}>
        <filterContext.Provider value={{ filter }}>
          <CoffeeList />
        </filterContext.Provider>
      </searchContext.Provider>,
    );
  });

  it('should render the coffee list', () => {
    cy.getByDataCy('section-coffee-list').should('exist');
  });

  it('should render the correct number of coffee items', () => {
    cy.getByDataCy('coffee-list-item').should('have.length', postItems.length);
  });

  it('should display "No results" message when there are no filtered posts', () => {
    cy.mountWithProviders(
      <searchContext.Provider value={{ searchQuery: 'Nonexistent' }}>
        <filterContext.Provider value={{ filter }}>
          <CoffeeList />
        </filterContext.Provider>
      </searchContext.Provider>,
    );
    cy.getByDataCy('no-results-message').should('exist');
  });
});
