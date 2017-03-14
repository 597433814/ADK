var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { admin: req.session.admin});
});
router.get('/shops', function(req, res, next) {
  res.render('shops', { admin: req.session.admin});
});
module.exports = router;
