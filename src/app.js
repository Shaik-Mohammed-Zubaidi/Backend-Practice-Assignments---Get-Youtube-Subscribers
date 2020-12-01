
const express = require('express');
const app = express()

const subscriber= require('./models/subscribers');

// Your code goes here

app.get('/subscribers',(req,res)=>{
    subscriber.find().then((result)=>{
        res.json(result);
        // console.log(result);
    }).catch(err=>console.log(err));
});

app.get('/subscribers/names',(req,res)=>{
    subscriber.find().then((subscribers)=>{
        let namesList= subscribers.map(subscriber=>{
            return {name: subscriber.name, subscribedChannel: subscriber.subscribedChannel};
        });
        // console.log(namesList);
        res.json(namesList);
    }).catch(err=>console.log(err));
})

app.get('/subscribers/:id',(req,res)=>{
    const id= req.params.id;
    subscriber.findById(id).then((result)=>{
        res.json(result);
        // console.log(result);
    }).catch(error=>{
        console.log(error);
        res.status(400).json({message: error.message});
    })
})

module.exports = app;
