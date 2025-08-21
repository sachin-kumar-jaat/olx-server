const mongoose = require("mongoose");

main().then(
    ()=>console.log("database successfuly create")
).catch(err => console.log(err))

async function main(){
  await  mongoose.connect("mongodb+srv://kumarsachin88131:Gaa10NNjAuGbaD0O@cluster0.p46l9zy.mongodb.net/olx")
}