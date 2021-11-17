import express from 'express';

const routerOrdre = express.Router();

routerOrdre.get('/' , function(req , res) {
    res.send('helooo from order');
});

export default routerOrdre;