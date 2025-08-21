const mongoose = require("mongoose");

main().then(
    ()=>console.log("database successfuly create")
).catch(err => console.log(err))

async function main(){
  await  mongoose.connect("mongodb+srv://kumarsachin88131:HrkTIJvw32tmX70G@olxdatabaseserver.x0hr0qm.mongodb.net/olx")
 }                       