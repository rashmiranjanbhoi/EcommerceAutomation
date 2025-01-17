describe('Amazon automation', () => {
  it('Search Product,Capture Details, add to cart and buy the item ', () => {

    cy.visit('https://www.amazon.in'); // Visit to Amaxon we site
    cy.get('#twotabsearchtextbox').type('Titan watch{enter}');


    //Capturing all details
    cy.get(' div:nth-child(7) > div > div > div > div > span > div').first().within(() => {
      cy.get('h2 a span').invoke('text').as('productName');
      cy.get('.a-price-whole').invoke('text').as('productPrice');
      cy.get('h2 a').invoke('attr', 'href').then((href) => {
        cy.wrap('https://www.amazon.in' + href).as('productLink');
      });
    });

    //logging all details
    cy.get('@productName').then((productName) => {
      cy.log('Product Name: ' + productName);
    });
    cy.get('@productPrice').then((productPrice) => {
      cy.log('Product Price: ' + productPrice);
    });
    cy.get('@productLink').then((productLink) => {
      cy.log('Product Link: ' + productLink);
    });

    cy.get('div:nth-child(7) > div > div > div > div > span > div').first().within(() => {
      cy.get('h2 a').invoke('removeAttr', 'target').click();
    });


    cy.get('#add-to-cart-button').click(); // adding to Cart

    cy.get("#attach-popover-lgtbox").click({ //removing a skip popup
      force: true
    })

    cy.get('#sc-buy-box-ptc-button > span > input').click(); //Moving to buy now screen

    //Performance Testing

    cy.lighthouse({
      performance: 85,
      accessibility: 90,
      'best-practices': 85,
      seo: 80,
      pwa: 70,
    });

  });
});