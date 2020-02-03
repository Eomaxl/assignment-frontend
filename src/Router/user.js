const express = require('express');
const router = express.Router();
const User = require('./../models/user');


//fetch all users
router.get('/users',async(req,res)=>{
    try{
        const users = await User.find({});
        res.send(users);
    }
    catch(e)
    {
        res.status(500).send(e);
    }
    
})

//fetch particular user
router.get('/users/:id',async(req,res)=>{
    const _customerID = req.params.id;

    try{
        const user = await User.find({customerID:_customerID});

        if(!user)
        {
            return res.status(404).send()
        }
        res.send(user);
    }
    catch(e)
    {
        res.status(500).send(e);
    }
})

//create a new user
router.post('/users',async (req,res)=>{
    const user = new User(req.body);
    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(e)
    {
        res.status(400).send(e);
    }
})

// update an user
router.patch('/users/:id',async(req,res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name','birthday'];
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update);
    })

    if(!isValidOperation)
    {
        return res.status(400).send({error: 'Invalid updates !'})
    }
    try{
        const _customerID = req.params.id;
        console.log("Just before hitting user");
        const user = await User.findOneAndUpdate({customerID:_customerID},req.body,{new:true,runValidators:true});
        console.log("One step");
        //no user
        if(!user)
        {
            return res.status(404).send();
        }

        res.send(user);
    }
    catch(e)
    {
        res.status(500).send(e);
    }
})


// delete an user
router.delete('/users/:id',async(req,res) =>{
    const _customerID = req.params.id;  
    console.log("id: ",_customerID);
    try{
        const user = await User.findOneAndDelete({customerID:_customerID})

        if(!user)
        {
            return res.status(400).send('User not found');
        }
        res.status(200).send({'status':'deleted successfully'});
    }
    catch(e)
    {
        res.status(500).send(e);
    }
})


module.exports = router