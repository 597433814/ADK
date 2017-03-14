var express = require('express');
var router = express.Router();
var model=require('../tools/mongo.js');
var shop=model.shop;
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { admin: req.session.admin});
});
router.get('/fuck', function(req, res, next) {
	shop.find(function(err,data){
			if(err){
					console.log('查询失败');
			}else{
					res.json(data);
			}
	})

});

//router.get('/shops/:_id', function(req, res, next) {
//	res.render('shops', { admin: req.session.admin});
//});

router.get('/shops/:_id', function(req, res, next) {
	console.log(req.params)
	shop.findOne({_id:req.params._id},function(err,data){
		if(err){
			console.log('失败')
		}else{
			res.render('shops', { admin: req.session.admin, data: data})
		}
	})
});
module.exports = router;
