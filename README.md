# 🛒 Automação de E-Commerce com Cypress & Inteligência Artificial

![Cypress](https://img.shields.io/badge/Cypress-Automation-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

Este repositório apresenta um framework de automação de testes End-to-End (E2E) focado em um ecossistema de E-Commerce. O projeto aplica o padrão Page Object Model (POM) para simular e auditar a jornada real do usuário, incluindo fluxos críticos de negócio e geração automatizada de relatórios estatísticos e evidências de falhas.

---

## 📊 Demonstração Visual & Evidências do Pipeline

Esta seção apresenta o comportamento dinâmico do framework e a validação do comportamento do ecossistema frente a cenários de sucesso e erros controlados de regressão.

### 🎬 1. Execução de Sucesso (Vídeo do Teste Inteiro)
O vídeo abaixo demonstra o pipeline executando a esteira completa de testes automáticos com sucesso em modo headless, gerenciando as dependências e validando todos os fluxos planejados.


<img width="800" height="432" alt="videotruecompletoaaa-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/cdbdff05-260e-4e06-b8b3-83ef2f9b2062" />


### 📸 2. Execução com Erro Controlado & Screenshots Automáticos
Demonstração técnica do comportamento do Cypress ao rodar o teste com falha simulada. O vídeo exibe o momento exato em que a asserção quebra e o framework captura de forma assíncrona o screenshot da interface.

<img width="800" height="514" alt="ezgif com-video-to-gif-converter (1)" src="https://github.com/user-attachments/assets/319c496f-c451-484e-9a84-0188c5b337d7" />



### 📊 3. Relatório Avançado Mochawesome com Gráficos
Métricas geradas dinamicamente via `cypress-mochawesome-reporter`. O gráfico exibe a consolidação visual do resultado do teste, evidenciando as falhas simuladas com a imagem do erro indexada diretamente no HTML.

<img width="998" height="628" alt="grafico       " src="https://github.com/user-attachments/assets/177c10d1-2121-4e08-950e-7339427de23a" />


### ⚙️ 4. Configuração das Diretivas do Framework
Exibição das propriedades de ambiente no arquivo de configuração do Cypress, habilitando a injeção do plugin do reporter, suporte a gráficos e capturas de falha.

<img width="624" height="479" alt="config" src="https://github.com/user-attachments/assets/289cf4db-458e-4450-bcb4-c22dae47b2a7" />



### 💻 5. Estrutura Arquitetural de Page Objects (POM)
Visão interna dos objetos da página isolados de forma limpa no VS Code, garantindo reuso de seletores para as camadas do carrinho, checkout e produtos.
<img width="1894" height="788" alt="outros pages" src="https://github.com/user-attachments/assets/6c9bc2e2-6427-4d4b-aab9-c2736e4c3431" />



### 🧪 6. Script de Testes E2E Estruturado
Visão da especificação técnica descrita no arquivo de testes (`loginEcom.cy.js`), utilizando ganchos de ciclo de vida (`beforeEach`) para isolamento dos cenários.

<img width="1910" height="779" alt="logineconcy js" src="https://github.com/user-attachments/assets/ad2ab303-41a6-4ab0-b1ba-2a4ddcc29acd" />




---

## 🧠 Arquitetura do Projeto & Boas Práticas (POM)
O ecossistema foi estruturado visando alta manutenibilidade e desacoplamento do código:

* `homePage.js`: Gerenciamento do fluxo de entrada e navegação inicial.
* `loginPage.js`: Centralização de seletores e métodos de autenticação de usuários.
* `productsPage.js`: Automação de buscas e seleção de produtos.
* `cartPage.js`: Validação de itens e transição para o checkout.
* `checkoutPage.js`: Manipulação do formulário de faturamento e confirmação de compra.

## ▶️ Como Executar o Framework

1. Instalar as dependências do projeto:
```bash
npm install
