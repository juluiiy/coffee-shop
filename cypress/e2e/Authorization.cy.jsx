const randomUser = {
  email: `test${Math.random()}@gmail.com`,
  password: '123456',
};

describe('Authorization', () => {
  beforeEach(() => {
    cy.visitApp();
  });

  it('Should move to sign up page', () => {
    cy.getByDataCy('login-button').click();
    cy.getByDataCy('sign-up-link').click();
    cy.getByDataCy('login-title').should('contain', 'Create account');
  });

  it('Should sign up new user', () => {
    cy.getByDataCy('login-button').click();
    cy.getByDataCy('sign-up-link').click();
    cy.getByDataCy('login-email').type(randomUser.email);
    cy.getByDataCy('login-password').type(randomUser.password);
    cy.getByDataCy('login-submit').click();
  });

  it('Should login', () => {
    cy.getByDataCy('login-button').click();
    cy.getByDataCy('login-email').type(randomUser.email);
    cy.getByDataCy('login-password').type(randomUser.password);
    cy.getByDataCy('login-submit').click();
  });
});
