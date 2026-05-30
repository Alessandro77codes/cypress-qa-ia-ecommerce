import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'

describe('Aula 2 - Cenários de Login com Page Objects', () => {
  
  beforeEach(() => {
    homePage.acessarSite();
    homePage.clicarLoginCadastro();
  });

  it('Cenário 1: Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
    // Tentando logar com um e-mail qualquer e senha errada
    loginPage.realizarLogin('teste_ia_alessandro@email.com', 'senhaIncorreta123');
    
    // Validando que a mensagem de erro do e-commerce ficou visível na tela
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });

  it('Cenário 2: Deve realizar login com sucesso usando credenciais válidas', () => {
    // Aqui usamos um usuário cadastrado na plataforma para testes
    loginPage.realizarLogin('alessandrovirtual@teste.com', '123456');
    
    // Validando que o botão de "Logout" ou o usuário logado apareceu na barra superior
    cy.contains('Logged in as').should('be.visible');
  });
});