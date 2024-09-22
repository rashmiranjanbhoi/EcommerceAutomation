describe('DELETE Request', () => {
  it('Create,Deletes a post and verifies the deletion', () => {

    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'Post will be deleted',
        body: 'I will delete this POST',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      const postId = response.body.id;

      // delete the post
      cy.request({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);

        // Verifing
        cy.request({
          method: 'GET',
          url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
          failOnStatusCode: false // Prevent Cypress from failing the test on 404
        }).then((getResponse) => {
          expect(getResponse.status).to.eq(404);
        });
      });
    });
  });
});