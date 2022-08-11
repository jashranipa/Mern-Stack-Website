const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../models/registers');


router.get('/',(req,res)=> {
    res.send("Hello world from server");    
});

router.get('/form2',(req,res)=> {
    res.send("Hello world 2 from server");    
});

router.get('/home',(req,res)=> {
    res.send("home from server");    
});

router.get('/student',(req,res)=> {
    res.send("student from server");    
});

// Create 
router.post('/register',async (req,res) => {
    
    const { name, branch , gender , phone , email , password } = req.body;

    try{
        const user = new User({name, branch , gender , phone , email , password});
        
        await user.save();
        res.status(201).json({message: "User data inserted successfully."})
    }
    catch(err)
    {
        console.log(err);
    }
    // console.log(req.body);
    // // res.json({message: req.body});
    // res.send("Ok");
});

// Read
router.get('/register', (req,res) => {
    User.find()
    .then(user => {
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Error Occured while Reading"})
    })
})

// Update
router.put('/register/:id', (req,res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id,req.body, {useFindAndModify:false})
    .then((data) => {
        if(!data)
        {
            res.status(404).send({message: `user not found with id =${id}`})
        }
        else
        {
            res.send(data);
        }

    })
    .catch((err) => {
        res.status(500).send({message: "Error in Updating information"});
    })
})

// Delete
router.delete('/register/:id', (req,res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
    .then((data) => {
        if(!data){
            res.status(404).send({message: "Maybe id is wrong"})
        }else{
            res.send({
                message: "User was deleted successsfully"
            })
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "Could not delete id = " + id
        });
    })
})

router.get('/faculty',(req,res)=> {
    res.send("faculty from server");    
});
router.get('/contact',(req,res)=> {
    res.send("contact from server");    
});

module.exports = router;