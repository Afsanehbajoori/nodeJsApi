import express from 'express';
import {v4 as uuidv4} from 'uuid';


const routerOrdre = express.Router();

let orders =[
    {
        Id : 1 , 
        Title : "Mobil",
        Quantity : 50,
        Message : "Iphone 12",
        City: "Ballerup"
    },
    {
        Id : 2 , 
        Title : "Mobil",
        Quantity : 50,
        Message : "sonny",
        City: "Ballerup"
    } 
]

routerOrdre.get('/' , function(req , res) {

    res.send(orders);
});

routerOrdre.post('/' , function(req , res) {
    const order = req.body;
    orders.push(order);
    res.send(`order ${order.Title} added`)
});

routerOrdre.get('/:id' , function(req,res) {
    const {id} = req.params;
    const orderFind = orders.find((order) => order.Id == id);
    res.send(orderFind);
});

routerOrdre.delete('/:id' , function(req,res) {
    const {id} = req.params;
    orders = orders.filter((order) => order.Id != id);
    res.send(`delete ${id}`); 
});



export default routerOrdre;