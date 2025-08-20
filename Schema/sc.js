const mongoose = require("mongoose")


const olxSchema = new mongoose.Schema({
   typename:{
        type:"string",
        required: true
    },
    bhkname:{
        type: "number",
        required: true
    },
    bathroomname:{
        type:"number",
        required: true
    
    },
    Furnishing:{
        type:"string",
        required: true
    },
    projectstatus:{
        type:"string",
        required: true
    },
    Listedname:{
        type:"string",
        required: true
    },  
    sqftname:{
        type:"string",
        required: true
    },
    Carpetname:{
        type:"string",
        required: true
    },
    Maintenance:{
        type:"string",
        required: true
    },
    tfloors:{
        type:"string",
        required: true
    },
    nfloors:{
        type:"number",
        required: true
    }, 
    Carparking:{
        type:"number",
        required: true
    },
    Facing:{
        type:"string",
        required: true
    },
    Project:{
        type:"string",
        required: true
    },  
    adtitle:{
        type:"string",
        required: true
    },
    Description:{
        type:"string",
        required: true
    },
    Price:{
        type: "number",
        required: true
    },
    
    location1:{
        type:"string",
        required: true
    },
    
    State:{
        type:"string",
        required: true
    },
    files: [
    {
      originalName: String,
      mimeType: String,
      size: Number,
      base64: String,
      required: true
    }
  ]
})


const olxdata = new mongoose.model("olxdata",olxSchema)



module.exports = olxdata




