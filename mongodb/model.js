const mong= require("mongoose");

const model=mong.Schema({
    name:{
        type:String,
        required:[true,"Mandatory"]
    },
    address:{
        type:String,
        required : [true,"Mandatory"]
    }
});

module.exports=mong.model("Model",model)