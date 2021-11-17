import express from 'express';
import bodyParser from 'body-parser';
import orderRouter from './routes/order.js';
import userRouter from  './routes/users.js';

//var order = require('./order');
//const dboperations = require('./dboperations');
//const express = require('express');
const app = express();
const PORT = 3300;

/* dboperations.getOrder().then(result => {
    console.log(result);
}); */

app.use(bodyParser.json());
app.use('/order' , orderRouter);
app.use('/user' , userRouter);


app.get('/' , function(req , res){
    res.send('helooo from sql server');
}); 

app.listen(PORT , ()=> console.log('server running')); 