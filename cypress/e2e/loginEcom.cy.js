import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'
import cartPage from '../pages/cartPage'
import checkoutPage from '../pages/checkoutPage' // Importando a nova página de checkout

describe('Jornada de Testes no E-Commerce', () => {
  
  beforeEach(() => {
    homePage.acessarSite();
  });

  it('Aula 2 - Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
    homePage.clicarLoginCadastro();
    loginPage.realizarLogin('teste_ia_alessandro@email.com', 'senhaIncorreta123');
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });

  it('Aula 2 - Deve realizar login com sucesso usando credenciais válidas', () => {
    homePage.clicarLoginCadastro();
    loginPage.realizarLogin('alessandrovirtual@teste.com', '123456');
    cy.contains('Logged in as').should('be.visible');
  });

  it('Aula 3 - Deve pesquisar um produto e adicioná-lo ao carrinho', () => {
    homePage.clicarEmProdutos();
    productsPage.pesquisarProduto('t-shirt');
    productsPage.adicionarPrimeiroProdutoAoCarrinho();
    cy.contains('Added!').should('be.visible');
    productsPage.clicarContinuarComprando();
  });

  it('Aula 4 - Deve validar o produto no carrinho e prosseguir para o checkout', () => {
    homePage.clicarLoginCadastro();
    loginPage.realizarLogin('alessandrovirtual@teste.com', '123456');
    homePage.clicarEmProdutos();
    productsPage.pesquisarProduto('t-shirt');
    productsPage.adicionarPrimeiroProdutoAoCarrinho();
    productsPage.clicarVerCarrinho();
    cartPage.validarProdutoNoCarrinho('Shirt');
    cartPage.prosseguirParaCheckout();
    cy.contains('Address Details').should('be.visible');
  });

  // ==================== NOVA AULA 5 ====================
  it.only('Aula 5 - Deve realizar o checkout e finalizar o pedido com sucesso', () => {
    // 1. Fluxo inicial: Login, Adição ao carrinho e ir para o Carrinho
    homePage.clicarLoginCadastro();
    loginPage.realizarLogin('alessandrovirtual@teste.com', '123456');
    homePage.clicarEmProdutos();
    productsPage.pesquisarProduto('t-shirt');
    productsPage.adicionarPrimeiroProdutoAoCarrinho();
    productsPage.clicarVerCarrinho();

    // 2. Transição do Carrinho para a Revisão do Pedido (Checkout)
    cartPage.prosseguirParaCheckout();

    // 3. Ações na página de Checkout
    checkoutPage.inserirComentarioPedido('Pedido automatizado com Cypress e IA.');
    checkoutPage.clicarInserirPedido();

    // 4. Preenchimento de dados de teste de pagamento
    checkoutPage.preencherDadosPagamento(
      'Alessandro C Santos', 
      '4000123456789010', 
      '123', 
      '12', 
      '2030'
    );
    checkoutPage.confirmarPagamento();

    // 5. Validação final de Sucesso do Pedido
    cy.contains('Order Placed!').should('be.visible');
    cy.get('[data-qa="order-placed"]').should('be.visible');
  });
});