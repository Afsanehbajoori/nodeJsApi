/* var config = require('./dbconfig'); //load a connection string
const sql = require('mssql'); // use a mssql module


async function getOrder(){
    try{
        let pool = await sql.connect(config);

        let product =await pool.request().query("select * from order");
        return product.recordsets;
    }
    catch(error){
        console.log(error);
    }
    
}

module.exports= {
    getOrder : getOrder
} */