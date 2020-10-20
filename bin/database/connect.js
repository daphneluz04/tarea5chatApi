const mongoose=require('mongoose');
mongoose.connect("mongodb://192.168.96.2:27017/chat");
module.exports=mongoose;
