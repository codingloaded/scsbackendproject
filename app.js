require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")


const cookieParser = require("cookie-parser")
const path = require("path");
const connectDB = require("./config/dbConnect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")


const start = async () => {
    try {
        await connectDB().then(() => console.log("db is connected")).catch((err) => console.log(err));
    } catch (error) {
        console.log(error)
    }
}
start();

app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`file running on => http://localhost:${PORT} `)
})
