require("dotenv").config();

const express = require ("express");
const app = express();
const PORT = 5000;

const cookieParser = require("cookie-parser")
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs")


app.get("/",(req,res)=>{
res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`file running on => http://localhost:${PORT} `)
})
