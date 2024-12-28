import { post } from 'axios'; // Importando o axios para fazer as requisições HTTP

describe('Teste de Seleção de Novo Board Salvo', () => {
    beforeEach(() => {
       cy.guilogin(); 
    });

    describe('Selecionando board de teste', () => {
        it('Deve selecionar um board salvo e realizar as interações subsequentes', () => {
        cy.selecionarBoardDeTeste();
        });
      });

    describe('Enviar Casos de Teste para ALM Octane', () => {
         it('Lê o arquivo JSON e envia os casos para o ALM Octane', () => {
         // Carregar o arquivo JSON com os casos de teste
         cy.fixture('test-cases.json').then((testCases) => {
            const feature = testCases.feature;

         // URL da API do ALM Octane (substitua com a URL do seu servidor)
            const octaneUrl = 'https://octane.bradesco.com.br:8443';

         // Dados que serão enviados para o ALM Octane
            const testCasesData = feature.scenarios.map((scenario) => ({
            name: scenario.name,
            description: `${feature.description} - ${scenario.name}`,
            steps: scenario.steps.map((step, index) => ({
            action: step['given', 'when', 'then'], // 'given', 'when' ou 'then'
            expected_result: step[index] // Aqui você pode mapear as expectativas para cada step
        }))
      }));

         // Configurar as opções para a requisição
           const config = {
           headers: {
            'Authorization': 'Bearer 4s8umXpV-QvTG8alvfWpH8brYR2P8tWDHo18VbQsOFM8x9uLlpFK2OdTmC1NYIhPZ4M42urV9vSSKof1mi5hkkGJh2-7491R-3Op0wJAPTqBnht6gR9lxtg7Cfez9hy4myDnQmXp0fDZXhfid2Fn6icwfJJP4i8epLKZRlEr3QfbBcVgzJoTP2a7Cu6HmxexCr1w8fyNEehbPKA1WYOtbcV4vJ_mYGWMkcssmximvhn4wf8jCrw8p-8Mr23NBabNh-hF8j6srnXsli3YInGkr11wUpjDY1M0SDvFj5yqHbyPjMiQicvfvpGS_EiEdlFAWB3rhsZ3zVb0AHV9qZ2XvmmiI_W8504gAxPHHlBLEoc.', // Substitua pelo seu token de autorização
            'Content-Type': 'application/json'
        }
      };

         // Enviar os casos de teste para o ALM Octane
           testCasesData.forEach((testCase) => {
            post(octaneUrl, testCase, config)
            .then(response => {
         cy.log(`Caso de teste '${testCase.name}' enviado com sucesso para o ALM Octane`);
          })
            .catch(error => {
         cy.log(`Erro ao enviar o caso de teste '${testCase.name}': ${error.message}`);
          });
      });
    });
  });
});
});