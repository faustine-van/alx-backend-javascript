const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id(\\d+)', (req, res) => {
  const ids = req.params.id;
  if (!isNaN(ids)) {
    res.send(`Payment methods for cart ${ids}`);
  }
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
