// module 5-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  // Setup before each test case
  let spyConsole;
  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });
  // Setup after each test case
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    spyConsole.restore();
  });
  it('test will call sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    sinon.assert.calledOnceWithExactly(spyConsole, 'The total is: 120');
  });
  it('test will call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    sinon.assert.calledOnceWithExactly(spyConsole, 'The total is: 20');
  });
});
