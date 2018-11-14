const dbConnection = require('./database');

dbConnection.mongoConnect(
    (results)=>{
        console.log(results);
    }
)