const express = require ('express');
const contact = require('../models/contact.js');
const router = express.Router();

var Contact = require('../models/contact.js');

router.get('/',(req,res,next)=>{
    Contact.find((err,contact)=>{
        if(err){
            console.log('error : ',err);
        } else{
            res.json({cont: contact});
        }
    });
    //res.json({message :'Hello'});
});

router.post('/', (req,res,next)=>{
    var contact = new Contact({fullName: req.body.contactName, phone:req.body.contactPhone});
    contact.save((err,newContact)=>{
        if(err){
            console.log('there is an error :',err);
        } else {
            res.json(newContact);
        }
    });
});

module.exports = router;
