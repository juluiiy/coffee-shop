import { filterContext, searchContext } from '../../context';
import AppSearch from '.';

describe('AppSearch Component', () => {
  let setSearchQuery;
  let setFilter;

  beforeEach(() => {
    setSearchQuery = cy.stub();
    setFilter = cy.stub();

    cy.mountWithProviders(
      <searchContext.Provider value={{ searchQuery: '', setSearchQuery }}>
        <filterContext.Provider value={{ setFilter }}>
          <AppSearch />
        </filterContext.Provider>
      </searchContext.Provider>,
    );
  });

  it('should render the search input', () => {
    cy.getByDataCy('search-input').should('exist');
  });

  it('should toggle filter on button click', () => {
    cy.getByDataCy('filter-button-Brazil').click();
    cy.wrap(setFilter).should('have.been.calledWith', 'Brazil');
    cy.getByDataCy('filter-button-Brazil').should('have.class', 'selected');

    cy.getByDataCy('filter-button-Brazil').click();
    cy.wrap(setFilter).should('have.been.calledWith', 'all');
    cy.getByDataCy('filter-button-Brazil').should('not.have.class', 'selected');
  });
});
