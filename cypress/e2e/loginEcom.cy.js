import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'
import cartPage from '../pages/cartPage' // Importando a nova página do carrinho

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
    // CORRIGIDO: Chamando o método correto mapeado no seu arquivo de produtos
    productsPage.adicionarPrimeiroProdutoAoCarrinho();
    cy.contains('Added!').should('be.visible');
    productsPage.clicarContinuarComprando();
  });

  // ==================== NOVA AULA ====================
  it('Aula 4 - Deve validar o produto no carrinho e prosseguir para o checkout', () => {
    // 1. Faz o login primeiro para poder prosseguir para o checkout depois
    homePage.clicarLoginCadastro();
    loginPage.realizarLogin('alessandrovirtual@teste.com', '123456');

    // 2. Busca e adiciona o produto
    homePage.clicarEmProdutos();
    productsPage.pesquisarProduto('t-shirt');
    productsPage.adicionarPrimeiroProdutoAoCarrinho();
    
    // 3. Em vez de fechar o modal, clica em "View Cart" para ir ao carrinho
    productsPage.clicarVerCarrinho();

    // 4. CORRIGIDO: Passando o termo que a tabela aceita com segurança
    cartPage.validarProdutoNoCarrinho('Shirt');

    // 5. Avança para a tela de checkout
    cartPage.prosseguirParaCheckout();

    // 6. Valida que chegamos na página de revisão do pedido
    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');
  });
});