
const express = require("express")
const cors =  require ("cors")
const dotenv = require("dotenv")

dotenv.config();
const app = express()
PORT = 5000;
require("./db/dbconnect")
const router = require("./Router/router")

const corsOptions ={
    origin:process.env.FRONTEND_URL,
    methods:["GET","POST"],
    allowedHeaders:["Content-Type","Authorization"]
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/auth",router)

app.listen(PORT,()=>{
    console.log("successful create server")
})