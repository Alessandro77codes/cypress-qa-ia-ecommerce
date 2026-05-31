class ProductsPage {
  pesquisarProduto(nomeProduto) {
    cy.get('#search_product').type(nomeProduto);
    cy.get('#submit_search').click();
  }

  adicionarPrimeiroProdutoAoCarrinho() {
    // Clica no botão "Add to cart" do primeiro produto que aparecer no resultado
    cy.get('.features_items .add-to-cart').first().click();
  }

  clicarContinuarComprando() {
    // Fecha o modal de confirmação de sucesso que o e-commerce exibe
    cy.get('.modal-footer .close-modal').click();
  }
}
export default new ProductsPage();