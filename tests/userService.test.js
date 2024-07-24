const nock = require('nock');
const chai = require('chai');
const fetchUser = require('../src/userService');

const { expect } = chai;

describe('fetchUser', () => {
  before(() => {
    nock('https://api.example.com')
      .get('/users/1')
      .reply(200, { id: 1, name: 'Mock User' });
  });

  it('should return a mocked user', async () => {
    const user = await fetchUser(1);
    expect(user).to.deep.equal({ id: 1, name: 'Mock User' });
  });

  after(() => {
    nock.cleanAll();
  });
});
