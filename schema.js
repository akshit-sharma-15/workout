const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
user: {
   type:String,
   required:true
},
date: {
   type:Number,
   required:false
},
duration:{
   type:Number,
   required:true
},
caloriesBurned: {
   type:String
},
exercises:{
   name:[type:String,required:true],
    
}
});

const userData =  model(userData,'userSchema')
export userData;