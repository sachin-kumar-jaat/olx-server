const mongoose = require("mongoose");

main().then(
    ()=>console.log("database successfuly create")
).catch(err => console.log(err))

async function main(){
  await  mongoose.connect("mongodb+srv://kumarsachin88131:9ajSeET6FdQXxCVg@cluster0.mgapbil.mongodb.net/olx")
}