const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const ids = parseInt(req.params.id, 10);
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(ids)) {
    res.send(`Payment methods for cart ${ids}`);
  }
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
