import AppProductsInfo from '.';

describe('AppProductsInfo Component', () => {
  const props = {
    title: 'Product Title',
    description: 'Product Description',
    image: 'path/to/image.png',
    alt: 'Product Image',
    country: 'Country Name',
    price: '$100',
  };

  beforeEach(() => {
    cy.mountWithProviders(<AppProductsInfo {...props} />);
  });

  it('should render the products section', () => {
    cy.getByDataCy('section-about-product').should('exist');
  });
  it('should render the product title', () => {
    cy.getByDataCy('product-title').should('contain.text', props.title);
  });
});
