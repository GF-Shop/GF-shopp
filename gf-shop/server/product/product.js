// This is the model

var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

// TODO: Complete the pokemonSchema below.
var productSchema=mongoose.Schema({
    User:{type:String,required:true},
    Phonenumber:{type:Number,required:true},
    Product:{type:String,unique:true,required:true},
    Category:{type:String,required:true},
    Description:[String],
    ImageUrl:{type:String},
    Price:{type:String,required:true},
    

})


 var userSchema=mongoose.Schema({
    User:{type:String,required:true},
Phonenumber:{
    type:Number,required:true
},
    password:{type:String,required:true}

 })

 
// TODO: Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Product=mongoose.model("product",productSchema);
 var Users=mongoose.model('User',userSchema)

module.exports = {Product,Users};