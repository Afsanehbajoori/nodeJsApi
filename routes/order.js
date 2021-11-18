import express from 'express';

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

routerOrdre.patch('/:id' , function(req,res) {
    const {id} = req.params;
    const {Id , Title , Quantity , Message,City} = req.body;
    const order =orders.find((order) => order.Id == id);

    if(Id){order.Id == Id}
    if(Title){ order.Title == Title}
    if(Quantity){order.Quantity == Quantity}
    if(Message){order.Message == Message}
    if(City){order.City == City}
    res.send(`update ${id}`); 
});

export default routerOrdre;