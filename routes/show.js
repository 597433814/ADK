var express = require('express');
var router = express.Router();
var model=require('../tools/mongo.js');
var user=model.user;
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('show/cart', { admin: req.session.admin});

});
router.post('/lists', function(req, res, next) {
//		console.log(req.body)
			user.update({_id:req.session.admin._id},{$set:req.body},function(err,data){
				if(err){
					res.end('添加失败')
				}else{
					console.log(data)
				}
			})

});
router.get('/order', function(req, res, next) {
  res.render('show/order', { admin: req.session.admin});
});
module.exports = router;
