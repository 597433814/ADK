var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('show/cart', { admin: req.session.admin});
});
router.get('/order', function(req, res, next) {
  res.render('show/order', { admin: req.session.admin});
});
module.exports = router;
