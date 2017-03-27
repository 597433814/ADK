var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/adk');
var user=mongoose.model('user',{username:String,password:String,user:String,rkey:String,title:String,price:Number,img:String,num:Number,size:Number});
var shop=mongoose.model('shop',{title:String,price:Number,img:String,makprice:Number,sex:String,num:Number});
var cart=mongoose.model('cart',{title:String,price:Number,img:String,makprice:Number,sex:String,num:Number,size:Number,userId:String});
exports.user=user;
exports.shop=shop;
exports.cart=cart;

