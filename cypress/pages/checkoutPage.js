class CheckoutPage {
  inserirComentarioPedido(comentario) {
    // Insere um comentário opcional na revisão do pedido
    cy.get('textarea[name="message"]').type(comentario);
  }

  clicarInserirPedido() {
    // Clica no botão "Place Order" para ir para a tela de pagamento
    cy.get('a[href="/payment"]').click();
  }

  preencherDadosPagamento(nome, numeroCartao, cvc, mesExpiracao, anoExpiracao) {
    // Preenche o formulário de pagamento com dados fictícios
    cy.get('[data-qa="name-on-card"]').type(nome);
    cy.get('[data-qa="card-number"]').type(numeroCartao);
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type(mesExpiracao);
    cy.get('[data-qa="expiry-year"]').type(anoExpiracao);
  }

  confirmarPagamento() {
    // Clica no botão para finalizar o pagamento e processar o pedido
    cy.get('[data-qa="pay-button"]').click();
  }
}
export default new CheckoutPage();