const mongoose = require("mongoose")

const productSchema = new mongoose.Schgema({

    titel:{
        type : String,
        required : true,
    },
    description:{
        type: String,
        required : true,    
    },
    price:{
        type: String,
        required : true,
    },
    discount:{
        type: Number,
        default : 0
    },
    image:{
        type:String,
        default:'/image/download.png'
    },
    bgcolor:{
        type : String,
    },
    panelcolor:{
        type : String,
    },
    textcolor:{
        type : String,
    }


},{timestamps:true})


const productModel = new mongoose.model("product", productSchema)
module.exports = productModel