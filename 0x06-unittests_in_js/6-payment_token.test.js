const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the object', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        const expected = { data: 'Successful response from the API' };
        assert.deepStrictEqual(data, expected);
        done(); // Indicate test completion to Mocha
      })
      .catch((error) => {
        done(error); // Pass error to Mocha
      });
  }));
});
