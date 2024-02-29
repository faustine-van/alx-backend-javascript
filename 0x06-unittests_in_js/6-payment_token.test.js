const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

// const expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
  it('return a resolved promise with the object', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expected = { data: 'Successful response from the API' };
        assert.deepStrictEqual(res, expected);
        done();
      })
      .catch((error) => {
        done(error);
      });
  }));
});
