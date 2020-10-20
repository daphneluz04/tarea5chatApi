const mongoose=require('../connect');

const mensaje={
    senderNickname:String, //esta palabra al android
    message:String
};

const mensajemodel=mongoose.model('mensaje',mensaje);

module.exports=mensajemodel;
