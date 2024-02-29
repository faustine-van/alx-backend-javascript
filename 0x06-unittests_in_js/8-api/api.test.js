const request = require('request');
const assert = require('assert');

describe('index page', () => {
  it('responds with status 200', () => new Promise((done) => {
    request('http://localhost:7865', (err, res) => {
      assert.strictEqual(res.statusCode, 200);
    });
    done();
  }));
  it('responds with body', () => new Promise((done) => {
    request('http://localhost:7865', (err, res) => {
      assert.strictEqual(res.body, 'Welcome to the payment system');
    });
    done();
  }));
  it('responds with body content length', () => new Promise((done) => {
    request('http://localhost:7865', (err, res) => {
      assert.strictEqual(res.headers['content-length'], '29');
    });
    done();
  }));
  it('responds with body content type', () => new Promise((done) => {
    request('http://localhost:7865', (err, res) => {
      assert.strictEqual(res.headers['content-type'], 'text/html; charset=utf-8');
    });
    done();
  }));

  // Add other test cases as needed
});
