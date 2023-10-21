const mongoose = require('mongoose');

const actionPlanSchema = new mongoose.Schema({

    userID:{
        type:String,
        required:true
    },
    email:{
        type:String
      },
});