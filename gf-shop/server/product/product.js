// This is the model

var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

// we create the  schema of the product 
var productSchema=mongoose.Schema({
    User:{type:String},
    Phonenumber:{type:Number},
    Product:{type:String,unique:true},
    Category:{type:String},
    Description:[String],
    ImageUrl:{type:String},
    Price:{type:Number,required:true},
    

})

//we create the schema of the user  
 var userSchema=mongoose.Schema({
    User:{type:String,required:true},
Phonenumber:{
    type:Number,required:true
},
    password:{type:String,required:true},
    gender:{type:String}

 })

 

var Product=mongoose.model("product",productSchema);
 var Users=mongoose.model('User',userSchema)

module.exports = {Product,Users};