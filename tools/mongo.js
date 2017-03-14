var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/adk');
var user=mongoose.model('user',{username:String,password:String,user:String,rkey:String})
exports.user=user;


