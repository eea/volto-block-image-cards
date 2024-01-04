import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Blocks Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Add image cards block: Empty', () => {
    // Add block
    cy.getSlate().click();
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.imagecards')
      .contains('Image Cards')
      .click({ force: true });
    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');
    // then the page view should contain our changes
    // cy.get('.block.imagecards');
  });

  it('Add image cards block: Round tile', () => {
    // Add block
    cy.getSlate().click();
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.imagecards')
      .contains('Image Cards')
      .click({ force: true });
    // Select round tile display
    cy.get('#sidebar .field-wrapper-display .react-select__control').click();
    cy.get('#sidebar .field-wrapper-display .react-select__menu div')
      .contains('Round Tile')
      .click();
    // Add Round Tile 1
    cy.get('#sidebar .add-item-button-wrapper').click();
    cy.get('.ui.accordion .active.content #field-title-0-cards-0').type(
      'Round Tile 1',
    );
    // Add Round Tile 2
    cy.get('#sidebar .add-item-button-wrapper').click();
    cy.get('.ui.accordion .active.content #field-title-0-cards-1').type(
      'Round Tile 2',
    );
    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');
    // then the page view should contain our changes
    cy.get('.card .card-title').contains('Round Tile 1');
    cy.get('.card .card-title').contains('Round Tile 2');
  });

  it('Add image cards block: Carausel', () => {
    cy.intercept('GET', '/**/image.png/@@images/image-*').as('getImage');
    cy.intercept('POST', '*').as('saveImage');
    // Add block
    cy.getSlate().click();
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.imagecards')
      .contains('Image Cards')
      .click({ force: true });
    cy.get('#sidebar .field-wrapper-display .react-select__control').click();
    cy.get('#sidebar .field-wrapper-display .react-select__menu div')
      .contains('Splashy Carousel')
      .click();
    // Add Caraousel Tile 1
    cy.get('#sidebar .add-item-button-wrapper').click();
    cy.get('.ui.accordion .active.content #field-title-0-cards-0').type(
      'Tile 1',
    );
    cy.get('#sidebar .field-attached-image input[type="text"]').type(
      `https://github.com/plone/volto/raw/master/logos/volto-colorful.png{enter}`,
    );
    cy.get('#sidebar .field-attached-image .basic.primary.button').click();
    cy.get('#toolbar-save').click();

    cy.get('.slide-img').should(
      'have.attr',
      'style',
      `background-image: url("https://github.com/plone/volto/raw/master/logos/volto-colorful.png"); height: 600px;`,
    );
    cy.get('.slide-body .slide-title').contains('Tile 1');
  });

  it('Add image cards block: Discreet Carausel', () => {
    cy.intercept('GET', '/**/image.png/@@images/image-*').as('getImage');
    cy.intercept('POST', '*').as('saveImage');
    // Add block
    cy.getSlate().click();
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.imagecards')
      .contains('Image Cards')
      .click({ force: true });
    cy.get('#sidebar .field-wrapper-display .react-select__control').click();
    cy.get('#sidebar .field-wrapper-display .react-select__menu div')
      .contains('Discreet Carousel')
      .click();
    // Add Caraousel Tile 1
    cy.get('#sidebar .add-item-button-wrapper').click();
    cy.get('.ui.accordion .active.content #field-title-0-cards-0').type(
      'Tile 1',
    );
    cy.get('#sidebar .field-attached-image input[type="text"]').type(
      `https://github.com/plone/volto/raw/master/logos/volto-colorful.png{enter}`,
    );
    cy.get('#sidebar .field-attached-image .basic.primary.button').click();
    cy.get('#toolbar-save').click();

    cy.get('.discreet-slide-img img').should(
      'have.attr',
      'src',
      'https://github.com/plone/volto/raw/master/logos/volto-colorful.png',
    );
  });
});
