
describe('Login', () => {
    beforeEach('Realizar login', () => {
       cy.guilogin();
    });
   
    describe('Criando nova pasta de trabalho', () => {
      it.only('Nova pasta', () => {
        cy.criarPasta();
      });
    });
   
    describe('Criando novo board de teste', () => {
        it('Novo board de testes', () => {
        cy.testesConfigs();
      });
    });
  });