var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/adk');
var user=mongoose.model('user',{username:String,password:String,user:String,rkey:String})
var shop=mongoose.model('shop',{title:String,price:Number,img:String,makprice:Number,sex:String,num:Number})
exports.user=user;
exports.shop=shop;


