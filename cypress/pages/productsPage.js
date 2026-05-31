class ProductsPage {
  pesquisarProduto(nomeProduto) {
    cy.get('#search_product').type(nomeProduto);
    cy.get('#submit_search').click();
  }

  adicionarPrimeiroProdutoAoCarrinho() {
    cy.get('.features_items .add-to-cart').first().click();
  }

  clicarContinuarComprando() {
    cy.get('.modal-footer .close-modal').click();
  }

  // Novo método para clicar no link de "View Cart" dentro do modal de sucesso
  clicarVerCarrinho() {
    cy.get('.modal-body a[href="/view_cart"]').click();
  }
}
export default new ProductsPage();