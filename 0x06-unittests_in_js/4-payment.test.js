/* math used for sendPaymentRequestToApi(100, 20) is
the same as Utils.calculateNumber('SUM', 100, 20) */
const sinon = require('sinon');
// const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

// Stub Utils.calculateNumber to always return 10
const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

// Create a spy for console.log
const consoleSpy = sinon.spy(console, 'log');

// call function
sendPaymentRequestToApi(100, 20);

// Verify that Utils.calculateNumber was called with the correct arguments
sinon.assert.calledWithExactly(stub, 'SUM', 100, 20);

// Verify that console.log was called with the correct message
sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');

// assert.strictEqual(spy.returnValues[0], stub.returned());
stub.restore();
consoleSpy.restore();
