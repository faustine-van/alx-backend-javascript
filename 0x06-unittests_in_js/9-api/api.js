const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id', (req, res) => {
  const ids = parseInt(req.params.id);
  if (!isNaN(ids)) {
    res.send(`Payment methods for cart ${ids}`);
  } else {
    res.status(404).send(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ${req.url}</pre></body></html>`);
  }
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
