const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model")


router.get("/phones", (req,res,next) => {
    
    Phone.find()
    .then( phonesFromDb => {
        console.log(phonesFromDb);
        res.status(200).json({phones: phonesFromDb})

    })
    .catch(err => res.json(err));




})

router.get("/phones/:id", (req,res,next) => {

    phoneId = req.params.id;   

    Phone.findById(phoneId)
    .then( phoneData => {
        
        res.status(200).json(phoneData)

    })
    .catch(err => res.json(err));

})



module.exports = router;


























module.exports = router;