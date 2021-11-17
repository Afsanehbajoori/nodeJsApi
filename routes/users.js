import express  from "express";
import {v4 as uuidv4} from 'uuid';
import routerUser from './users';




const routerUser= express.Router();


const users= [
    {
        firstname : "Allan" , 
        lastname: "Tori",
        age : 6
    },
    {
        firstname : "Adrian" , 
        lastname: "Tori",
        age : 3
    }
   
];

routerUser.get('/' , function(req,res) {
    console.log(users);
    res.send(users);
    
});

routerUser.post('/' , function(req,res) {
    const user = req.body;
    //const userId = uuidv4();
    //const userWithId ={...user , id:userId};
    users.push({...user , id:uuidv4()});
    //users.push(userWithId);
    //users.push(user);
    res.send(`user with name ${user.firstname} added`);
}); 

routerUser.get('/:id' , function(req , res) {
    const {id} =req.params;
  