/* eslint-disable no-undef */

describe('Teste de Seleção de Novo Board Salvo', () => {
    beforeEach(() => {
       cy.guilogin(); 
    });
  
  describe('Selecionando board de teste', () => {
    it('Deve selecionar um board salvo e realizar as interações subsequentes', () => {
      cy.selecionarBoardDeTeste();
    });
  });
});