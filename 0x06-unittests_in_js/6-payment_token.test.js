const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the expected object', () => new Promise((done) => {
    // Call the function and wait for the promise to resolve
    getPaymentTokenFromAPI(true).then((result) => {
      // Define the expected object
      const expected = { data: 'Successful response from the API' };

      // Compare the result with the expected object
      assert.deepStrictEqual(result, expected);

      // Call done to indicate that the test is complete
      done();
    }).catch((error) => {
      // If there is an error, fail the test
      done(error);
    });
  }));
});
