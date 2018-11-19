const express = require('express');
const bodyParser = require('body-parser');

const dbConnection = require('./database');
const productRouter = require('./routers/product.router.js');
const userRouter = require('./routers/user.router');

const eApp = express();
eApp.use(bodyParser.urlencoded({ extended: true }));
eApp.use('/product', productRouter);
eApp.use('/user', userRouter);

dbConnection.mongoConnect(
    ()=>{
        //database connection established or error is thrown    
        /*const Product = require('./product.js').Product;
        let prod1 = new Product("Jabuka", "20.00", "...je lepa");
        prod1.save();*/

        //...or execute express application
        eApp.listen(3000);
    }
);