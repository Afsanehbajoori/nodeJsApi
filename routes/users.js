import express  from "express";
import {v4 as uuidv4} from 'uuid';

const routerUser= express.Router();


let users= [
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
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
});

routerUser.delete('/:id' , function(req , res) {
    const {id} =req.params;
    users = users.filter((user) => user.id != id);
    res.send(`user ${id} deleted`);
});

routerUser.patch('/:id' , function(req,res) {
    const {id} =req.params;
    const {firstname , lastname , age} = req.body;
    const user = users.find((user) => user.id == id );

    if(firstname){
       user.firstname = firstname;
    }
    if(lastname){
       user.lastname= lastname;
    }
    if(age){
    user.age=age
    }

    res.send(`user ${id} updated`);
})

export default routerUser;
