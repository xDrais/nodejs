const express = require('express');
const contact = require('../models/contact.js');

const router = express.Router();

var Contact = require('../models/contact.js')

const mongoose = require('mongoose');

router.get('/',async(req,res,next)=>{
    const contact = await Contact.find();
    res.json(contact);
});

router.post('/',(req,res,next)=>{
    var contact = new Contact({fullname: req.body.contactname , phone: req.body.contactnumber });

    contact.save((err,newContact)=>{
        if(err)
        {
            console.log(`there is an error ${err} `);
        }
        else{
            res.json(newContact)
        }
    })
});




router.get('/:id',async (req, res) => {
    
        const user =  await Contact.findById(req.params.id);
        
        res.json(user);

})


router.delete('/:id',async (req, res) => {
    const user =  await Contact.findById(req.params.id);
        
    user.delete();
    res.json({user:'deleted'});
}) 


router.post('/:id',async (req, res) => {
    const user =  await Contact.findById(req.params.id);

    user.fullname=req.body.contactname;
    user.phone=req.body.contactnumber;
    user.save();
    res.json(user);
    
})





module.exports = router;
