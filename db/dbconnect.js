const mongoose = require("mongoose");

main().then(
    ()=>console.log("database successfuly create")
).catch(err => console.log(err))

async function main(){
  await  mongoose.connect("mongodb+srv://kumarsachin88131:WKEgKlom47x1QtBQ@cluster0.o0nsbn5.mongodb.net/olx")
}