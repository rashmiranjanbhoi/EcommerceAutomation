describe('PUT Request', () => {
  it("Let's update a POST", () => {
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        id: 1,
        title: 'One piece',
        body: 'Updated body content',
        userId: 1
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'One piece');
    });
  });
});
