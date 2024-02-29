/* math used for sendPaymentRequestToApi(100, 20) is
the same as Utils.calculateNumber('SUM', 100, 20) */
const sinon = require('sinon');
// const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const spy = sinon.spy(sendPaymentRequestToApi);
spy(100, 20);

const stub = sinon.stub(Utils, 'calculateNumber');
stub.alwaysReturned(10);
stub.calledWith('SUM', 100, 20);

// assert.strictEqual(spy.returnValues[0], stub.returned());
stub.restore();
