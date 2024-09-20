describe('POST /posts', () => {
  it('It will create a new post', () => {
    cy.request('POST', '/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });
});
