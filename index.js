
const express = require("express");
const cors = require("cors");
const app = express();

require("./db/dbconnect");
const router = require("./Router/router");

// CORS setup
app.use(
  cors({
    origin: "http://localhost:5173", // deploy hone ke baad yaha apna frontend ka deployed URL daalna
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", router);

// 👇 Vercel ke liye export karo (app.listen mat likhna)
module.exports = app;
// const express = require("express")
// const cors =  require ("cors")
// const app = express()
// PORT = 5000;
// require("./db/dbconnect")
// const router = require("./Router/router")

// app.use(cors(
//     {
//         origin: "http://localhost:5173"
//       }
// ))
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))

// app.use("/api/auth",router)

// app.listen(PORT,()=>{
//     console.log("successful create server")
// })