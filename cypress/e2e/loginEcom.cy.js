import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage' // Importando a nova página

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

  // ==================== NOVA AULA ====================
  it('Aula 3 - Deve pesquisar um produto e adicioná-lo ao carrinho', () => {
    // 1. Navega até a área de produtos
    homePage.clicarEmProdutos();
    
    // 2. Pesquisa por uma camiseta (t-shirt) e submete
    productsPage.pesquisarProduto('t-shirt');
    
    // 3. Adiciona o produto encontrado ao carrinho
    productsPage.adicionarPrimeiroProdutoAoCarrinho();
    
    // 4. Valida que o modal de sucesso apareceu na tela
    cy.contains('Added!').should('be.visible');
    
    // 5. Fecha o modal para garantir a limpeza do fluxo
    productsPage.clicarContinuarComprando();
  });
});