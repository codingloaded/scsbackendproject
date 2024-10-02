const mongoose = require("mongoose")

const userSchema = new mongoose.Schgema({

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
    cart:{
        type : Array,
        default :[]
    },
    orders:{
        type : Array,
        default :[]
    },
    picture:{
        type:String,
        default:'/image/download.png'
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    contact:{
        type : String,
        required : true,
    },


},{timestamps:true})


const UserModel = new mongoose.model("user", userSchema)
module.exports = UserModel