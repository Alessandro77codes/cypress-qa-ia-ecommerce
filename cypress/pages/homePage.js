class HomePage {
  acessarSite() {
    cy.visit('https://automationexercise.com');
  }

  clicarLoginCadastro() {
    cy.get('a[href="/login"]').click();
  }
}
export default new HomePage();