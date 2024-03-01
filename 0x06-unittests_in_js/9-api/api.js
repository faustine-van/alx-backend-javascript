const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id', (req, res) => {
  const ids = parseInt(req.params.id, 10);
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(ids)) {
    res.send(`Payment methods for cart ${ids}`);
  }
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
