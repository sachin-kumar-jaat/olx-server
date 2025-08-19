const express = require("express")
router = express.Router()
const olxdata = require("../Schema/sc")
const multer = require('multer');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/olxserver", upload.array('files'), async (req, res) => {
  const form = JSON.parse(req.body.form);
  console.log(req.files);

  const { typename, bhkname ,bathroomname , Furnishing, projectstatus, Listedname, sqftname, Carpetname,  Maintenance,  tfloors, nfloors ,Carparking ,Facing  ,Project,  adtitle ,Description ,Price , location1, State } = form;
  console.log(sqftname)
  const fileEntries = req.files.map(file => ({
    originalName: file.originalname,
    mimeType: file.mimetype,
    size: file.size,
    base64: file.buffer.toString('base64')
  }));

  if (!typename || !bhkname || !bathroomname || !Furnishing || !projectstatus || !Listedname || !sqftname || !Carpetname  || !Maintenance || !tfloors ||!nfloors ||!Carparking || !Facing || !Project || !adtitle || !Description ||!Price || !location1 || !State) {
      return res.json({ err: "invalid details" })
  }
    try {
          const data = { typename, bhkname ,bathroomname , Furnishing, projectstatus, Listedname, sqftname, Carpetname,  Maintenance,  tfloors, nfloors ,Carparking ,Facing  ,Project,  adtitle ,Description ,Price , location1, State };
          if(fileEntries.length > 0) {
            data.files = fileEntries;
          }
          console.log(data)
          const datasave = await olxdata(data)
          const savedata = await datasave.save()
          
            if (savedata) {
                return res.json({ msg: "successfuly data register" })
            }
    
            return res.json({ msg: "miss" })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: "Server Error" })
    }
})

router.get('/olxgetdata', async (req, res) => {
  try {
    const datasave = await olxdata.find({}); 
  
    res.json(datasave);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/olxid/:id', async (req, res) => {
  try {
    const datasave = req.params.id;
    const user = await olxdata.findById(datasave); 

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/',(req, res) => {
  res.send("welcome to server page")
});


module.exports = router



