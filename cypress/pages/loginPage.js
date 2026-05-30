class LoginPage {
  preencherCredenciais(email, senha) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);
  }

  clicarBotaoLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  // Novo método para realizar o fluxo completo de login
  realizarLogin(email, senha) {
    this.preencherCredenciais(email, senha);
    this.clicarBotaoLogin();
  }
}
export default new LoginPage();