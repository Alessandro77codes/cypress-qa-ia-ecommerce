class CartPage {
  validarProdutoNoCarrinho(nomeProduto) {
    // Busca no escopo geral do container do carrinho ignorando caixa alta/baixa
    cy.get('#cart_items').contains(nomeProduto).should('be.visible');
  }

  prosseguirParaCheckout() {
    cy.get('.check_out').click();
  }
}
export default new CartPage();