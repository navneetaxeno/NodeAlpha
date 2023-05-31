const path = require('path');
const express = require('express');

const router = express.Router();

// 
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'views', 'shop.html'));
});


router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'views', 'add-product.html'));
});

// add products : POST
router.post('/add-product', (req, res, next) => {
  console.log('response: ', req.body)
  res.redirect('/');
});

router.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});
module.exports = router;
