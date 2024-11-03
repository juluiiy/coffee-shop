import LoginForm from '.';

describe('LoginForm Component', () => {
  beforeEach(() => {
    cy.mountWithProviders(<LoginForm />);
  });

  it('should render the login form', () => {
    cy.getByDataCy('login-form').should('exist');
  });

  it('should render the login title', () => {
    cy.getByDataCy('login-title').should('contain.text', 'Login');
  });

  it('should render the email input', () => {
    cy.getByDataCy('login-email').should('exist');
  });

  it('should render the password input', () => {
    cy.getByDataCy('login-password').should('exist');
  });

  it('should render the submit button', () => {
    cy.getByDataCy('login-submit').should('exist');
  });

  it('should render the sign-up link', () => {
    cy.getByDataCy('sign-up-link').should('exist');
  });

  it('should update email and password on input change', () => {
    cy.getByDataCy('login-email').type('test@example.com');
    cy.getByDataCy('login-email').should('have.value', 'test@example.com');

    cy.getByDataCy('login-password').type('password123');
    cy.getByDataCy('login-password').should('have.value', 'password123');
  });

  it('should submit the form', () => {
    cy.getByDataCy('login-email').type('test@example.com');
    cy.getByDataCy('login-password').type('password123');
    cy.getByDataCy('login-submit').click();
  });
});
