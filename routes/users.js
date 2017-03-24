var express = require('express');
var router = express.Router();
var model=require('../tools/mongo.js');
var user=model.user;
var pass=require('../tools/pass.js');
/* GET users listing. */
//登录（users主页）的get
router.get('/', function(req, res, next) {
  res.render('users/login', { admin: req.session.admin});
});
//登录post
router.post('/',function(req,res){
//	console.log(req.body)
		req.body.password=pass.md5(req.body.password);
//		console.log(req.body.password)
		user.findOne(req.body,function(err,data){
			if(err){
				res.redirect('/users');
			}else{
				if(data==null){
					//查询成功，但是用户名和密码不对
					res.redirect('/users');
					
				}else{
					req.session.admin=data;
					res.redirect('/')
				}
			}
		})
})
//创建用户get
router.get('/create', function(req, res, next) {
  res.render('users/create', { admin: req.session.admin});
});
//创建用虎post
router.post('/create',function(req,res){
	console.log(req.body)
	req.body.password=pass.md5(req.body.password)
	user.create(req.body,function(err,data){
		if(err){
			res.redirect('/users/create')
		}else{
			res.redirect('/users')
		}
	})
})
//退出登录
router.get('/logout',function(req,res){
	 req.session.admin=null;
	 res.redirect('/');
})

//注册账号验证数据库
router.get('/checkUsername',function(req,res){
	console.log(req.query.username)
	var username=req.query.username;
	user.findOne({username:username},function(err,data){
		if(err){
			res.end('error')
		}else{
			var obj={};
			if(data==null){
				obj={success:0};
			}else{
				obj={success:1};
			}
		}
		res.json(obj)
	})
})


module.exports = router;
