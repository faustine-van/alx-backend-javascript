const request = require('request');
const assert = require('assert');

describe('index page', () => {
  // Basic Integration testing
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

  // Regex integration testing er
  it('correct status code when :id is 12?', () => new Promise((done) => {
    request('http://localhost:7865/cart/12', (err, res) => {
      assert.strictEqual(res.statusCode, 200);
    });
    done();
  }));
  it('correct status code when :id is not number?', () => new Promise((done) => {
    request('http://localhost:7865/cart/hello', (err, res) => {
      assert.strictEqual(res.statusCode, 404);
    });
    done();
  }));
  it('responds with body when :id is number', () => new Promise((done) => {
    request('http://localhost:7865/cart/12', (err, res) => {
      assert.strictEqual(res.body, 'Payment methods for cart 12');
    });
    done();
  }));
  it('test content length when :id is number', () => new Promise((done) => {
    request('http://localhost:7865/cart/12', (err, res) => {
      assert.strictEqual(res.headers['content-length'], '27');
    });
    done();
  }));
  it('test url when :id is number', () => new Promise((done) => {
    request('http://localhost:7865/cart/12', (err, res) => {
      assert.strictEqual(res.headers['content-type'], 'text/html; charset=utf-8');
    });
    done();
  }));
  it('test url when :id is number', () => new Promise((done) => {
    request('http://localhost:7865/cart/hello', (err, res) => {
      assert.strictEqual(res.headers['content-length'], '149');
    });
    done();
  }));
});
