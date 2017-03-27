var express = require('express');
var router = express.Router();
var model=require('../tools/mongo.js');
var user=model.user;
var cart=model.cart;
/* GET home page. */
router.get('/', function(req, res, next) {
	cart.find({userId:req.session.admin._id},function(err,data){
		if(err){
			res.end('查询失败')
			console.log('查询失败')
		}else{
			console.log(data)
			res.render('show/cart', {fuck:data, admin: req.session.admin});
		}
	})

});
router.post('/lists', function(req, res, next) {
//		console.log(req.body)
			req.body.userId=req.session.admin._id;
//			console.log(req.body)
			cart.create(req.body,function(err,data){
				if(err){
					res.end('添加失败')
				}else{
					res.redirect('show/cart')
				}
			})

});
router.get('/order', function(req, res, next) {
  res.render('show/order', { admin: req.session.admin});
});
module.exports = router;
