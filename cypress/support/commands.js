

 Cypress.Commands.add('guilogin', function () {
  var userName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Cypress.env('CHAVE_M');    
  var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Cypress.env('PASSWORD');
  cy.visit('/');
  cy.get('#inputUsername').clear().type(userName);
  cy.get('#inputPassword').type(password, {
    log : false
  }); 
  cy.contains('button', 'Login').click();  
})

Cypress.Commands.add('criarPasta', function() {
  cy.fixture('seletores').then(seletores => {
  cy.wait(15000);
  cy.get('li:nth-child(2) > ul > li > .dynatree-expanded > .dynatree-title').click();
  cy.get('[data-aid="tree-toolbar-add toolbar-button"]').click();
  cy.get(this.seletores.nomeDaPasta).type('ghfhggfg');
  cy.get(this.seletores.descricaoDaAtividade).type('xsxsxsxsxsxsxsxsxs');
  cy.get('.alm-field-component > alm-string-field-editor > .validity-indicator > .validity-include > .ng-dirty').click();
  cy.get(this.seletores.idJira).type('12345');
  cy.get(this.seletores.botaoAddPasta).click();
  
  cy.get('[ng-if="!shouldShowSaveAndClose"] > .button--default > translate').click();
  
  })

})

Cypress.Commands.add('testesConfigs', function () {
  cy.wait(15000);
  cy.get('span.dynatree-active span').click();
  cy.wait(10000);
  cy.contains('US0012- Certificado digital- Redirecionamento do botão "Ativar nova chave" na tela de Dispositivo de Segurança').click();
  cy.contains('span', 'Gherkin Test').click();
  cy.get('input[data-aid="alm-string-field-editor-input-box"]').type('CTM - 00');
  cy.get('.alm-field-component > field-editor-preeditor > .field-editor-preeditor-field > .validity-indicator > .validity-include > .multi-value-container').click();
  cy.get('.field-editor-search-results-list > .field-editor-search-results-groups:nth-child(3) > .field-editor-search-results-item > .width--100 > .relative:nth-child(1)').click();
  cy.get('div > .field-editor-selector-and-buttons-container > .minor > .minor > .button--primary').click();
  cy.get('.alm-row-container:nth-child(4) > .alm-presenter-component > .alm-field-type-LookupList > .alm-field-component > field-editor-preeditor > .field-editor-preeditor-field > .validity-indicator > .validity-include > .cols').click();
  cy.get('.selector-search-box > .field-editor-search-box > .validity-indicator > .validity-include > .field-editor-search-field').type('Solutis');
  cy.get('.search-results--match-part').contains('Solutis').click();
  cy.get('[field-name="severity_udf"] > .alm-presenter-component > .alm-field-type-LookupList > .alm-field-component > field-editor-preeditor > .field-editor-preeditor-field > .validity-indicator > .validity-include > .field-editor-preeditor-container').click();
  cy.get('span[data-aid="list_node.severity.high"]').click();
  cy.get('.alm-field-type-FlatReference > .alm-field-component > reference-field-editor-preeditor > [data-aid="reference-field-preeditor"] > [tooltip-entity-id=""] > field-editor-preeditor > .field-editor-preeditor-field > .validity-indicator > .validity-include > .field-editor-preeditor-container').click();
  cy.get('.selector-search-box > .field-editor-search-box > .validity-indicator > .validity-include > .field-editor-search-field').type(' NETEPSNE: Segurança NetEmp');
  cy.get('.width--100 > .relative > .parent-ellipsis > .inline-block > .field-editor-search-results-item-text-line-1:nth-child(4)').click();
  
  cy.get('.alm-field-type-Reference > .alm-field-component > reference-field-editor-preeditor > [data-aid="reference-field-preeditor"] > [tooltip-entity-id=""] > field-editor-preeditor > .field-editor-preeditor-field > .validity-indicator > .validity-include > .field-editor-preeditor-container').click();
  cy.get('.field-editor-search-field').type('123456');
  cy.get('.search-results--match-part').contains('123456').click();
  cy.get('.minor > .button--primary').click();

  
  cy.get('[field-name="regressivo_udf"] > .alm-presenter-component > .alm-field-type-LookupList > .alm-field-component > field-editor-preeditor > .field-editor-preeditor-field > .validity-indicator > .validity-include > .field-editor-preeditor-container').click();
  cy.get('.alm-field-type-LookupList > .alm-field-component > smart-editor > .open-direction-field-anchor > [ng-if="selectorInitialized"] > [ng-show="showSelector"] > .field-editor-selector-and-buttons-container > .alm-filter-container-resizable-first-child > .field-editor-selector > .field-editor-selector-content > .selector-items > .field-editor-search-dropdown-panel > .field-editor-search-dropdown-panel-container > .field-editor-search-results-list > :nth-child(2) > .field-editor-search-results-item > .width--100 > .relative > .parent-ellipsis').click()
  cy.get('[field-name="tecnologia_plataforma_udf"] > .alm-presenter-component > .alm-field-type-LookupList > .alm-field-component > field-editor-preeditor > .field-editor-preeditor-field > .validity-indicator > .validity-include > .field-editor-preeditor-container').click();
  cy.get('.field-editor-search-results-groups:nth-child(5) > .field-editor-search-results-item > .width--100 > .relative > .parent-ellipsis').click();

  cy.get('.set-presenter-in-the-same-row-as-section-title > .alm-presenter-component > .alm-field-type-LookupList > .alm-field-component > field-editor-preeditor > .field-editor-preeditor-field > .validity-indicator > .validity-include > .field-editor-preeditor-container').click();
  cy.get('.field-editor-search-results-groups:nth-child(3) > .field-editor-search-results-item > .width--100 > .relative > .parent-ellipsis').click();
  
  cy.get('.flex--1 > .cols > .margin-l--5px > .template-selector-button > .svg-common').click();
  cy.get('.alm-field-component > alm-string-field-editor > .validity-indicator > .validity-include > .ng-untouched').type('Teste Porto');
  cy.get('.browser-type--chrome > .modal > .modal__container > .modal__footer > .button--primary').click();
  
  
  
  //cy.get('.inline-block > .button--primary').click();
  //cy.get('translate[key="entity-form-cancel"]').click();

})



Cypress.Commands.add('selecionarBoardDeTeste', function() {
  cy.wait(15000);
  cy.get('span.dynatree-active span').click();
  cy.wait(10000);
  cy.contains('US0012- Certificado digital- Redirecionamento do botão "Ativar nova chave" na tela de Dispositivo de Segurança').click();
  cy.contains('span', 'Gherkin Test').click();

  cy.get('.alm-field-component:nth-child(1) > reference-field-editor-preeditor:nth-child(1) > div:nth-child(1) > div:nth-child(1) .field-editor-preeditor-field:nth-child(1) > .validity-indicator:nth-child(1) > .validity-include:nth-child(1) > .cols:nth-child(1) > .field-editor-preeditor-single-value-container:nth-child(1) > .field-editor-preeditor-field-display-value-text:nth-child(1)').click()

  cy.get('.selector-search-box > .field-editor-search-box > .validity-indicator > .validity-include > .field-editor-search-field').type('Teste Porto')

  cy.get('.width--100 > .relative > .parent-ellipsis > .inline-block > .field-editor-search-results-item-text-line-1:nth-child(4)').click()
  cy.get('[ng-if="!shouldShowSaveAndClose"] > .button--default > translate').click();
  //cy.get('.button--primary').click();

})
