

const express = require("express")
const cors =  require ("cors")
const app = express()
PORT = 5000;
require("./db/dbconnect")
const router = require("./Router/router")

app.use(cors(
    {
        origin: "http://localhost:5173"
      }
))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/auth",router)

app.listen(PORT,()=>{
    console.log("successful create server")
})