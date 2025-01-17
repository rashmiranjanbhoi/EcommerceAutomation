describe('GET /posts', () => {
    it('It will return a list of posts', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length(100);
        });
    });
  });
  