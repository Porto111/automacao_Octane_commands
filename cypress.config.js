const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://octane.bradesco.com.br:8443/',
    setupNodeEvents(on, config) {
    },
    
  },
      "video": true,  // Capturar vídeo de todas as execuções de teste
      "screenshotOnRunFailure": true,  // Capturar screenshots em falhas
      "trashAssetsBeforeRuns": true,  // Limpar vídeos e screenshots antigos antes de executar os testes
      "reporter": "mochawesome",  // Usar um reporter para gerar relatórios bonitos
      "reporterOptions": {
        "reportDir": "cypress/reports"
      }
  });
