

const express = require("express")
const cors =  require ("cors")
const app = express()

require("./db/dbconnect")
require("dotenv").config()
const router = require("./Router/router")


app.use(cors(
    {
        origin:"https://mern-olx-project.netlify.app/"
    }
))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/auth",router)

app.listen(process.env.PORT,()=>{
    console.log("successful create server")
})