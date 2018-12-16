const keys = require('../config/keys');
const stripe = require('stripe')(key.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/bill', (req, res) => {
    
  });
};