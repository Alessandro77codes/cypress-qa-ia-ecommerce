class HomePage {
  acessarSite() {
    cy.visit('https://automationexercise.com');
  }

  clicarLoginCadastro() {
    cy.get('a[href="/login"]').click();
  }

  // Novo método para navegar até a página de produtos
  clicarEmProdutos() {
    cy.get('a[href="/products"]').click();
  }
}
export default new HomePage();