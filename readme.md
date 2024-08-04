# SauceDemo: SwagLabs

## Configuração

1. **Instale as dependências**:
   ```console
   npm install
   ```

2. **Abra o Cypress**:
   ```console
   npx cypress open
   ```

3. **Execute os testes modo headless**:
   ```console
   npx cypress run
   ```

## Estrutura do Projeto

- **cypress/e2e/** - Contém os arquivos de teste.
- **cypress/pages/** - Contém os Page Objects e locators/elementos.
- **cypress/reports/** - Contém o relatório dos testes. (vai ser gerado após execução!)
- **cypress/fixtures/** - Contém dados estáticos para os testes.
- **cypress/support/** - Contém configurações e comandos adicionais.

## Testes

- **Login**: Testa login com credenciais válidas e inválidas.
- **Logout**: Testa logout do usuário.
- **Visualização de Produtos**: Testa a visualização e adição de produtos ao carrinho.
- **Remoção do Carrinho**: Testa a remoção de produtos do carrinho.
- **Finalização de Compra**: Testa o fluxo de finalização de compra.

## Separação Clara
   - Locators são definidos em arquivos separados (\`loginPageElements.js\`, etc.), e a lógica de interação é separada desses locators (\`loginPage.js\`, etc.). Essa abordagem melhora a organização do código e facilita a manutenção e expansão dos testes.

## Pipeline de Testes Regressivos
   - A pipeline de testes regressivos está configurada para ser executada em determinadas circunstâncias, como em push para a branch principal ou em horários agendados e garante que os testes sejam executados automaticamente sempre que houver um push para a branch principal ou nos horários agendados, proporcionando uma validação contínua do código.
