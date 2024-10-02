const mongoose = require("mongoose")

const ownerSchema = new mongoose.Schgema({

    username:{
        type : String,
        required : true,
        minLength : 3,
        trim : true
    },
    email:{
        type: String,
        required : true,
        unique:true
    },
    password:{
        type: String,
        required : true,
    },
    products:{
        type : Array,
        default :[]
    },
    picture:{
        type:String,
        default:'/image/download.png'
    },
    contact:{
        type : String,
    },
    gstin:{
        type : String,
    },


},{timestamps:true})


const ownerModel = new mongoose.model("owner", ownerSchema)
module.exports = ownerModel