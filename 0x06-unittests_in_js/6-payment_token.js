// module 6-payment_token.js
function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return new Promise((resolve) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
  // eslint-disable-next-line no-useless-return, consistent-return
  return;
}
module.exports = getPaymentTokenFromAPI;
