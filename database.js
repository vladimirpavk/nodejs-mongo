const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) =>{
    MongoClient.connect('mongodb://vladimir:observer@mycluster-shard-00-00-5mkmw.mongodb.net:27017,mycluster-shard-00-01-5mkmw.mongodb.net:27017,mycluster-shard-00-02-5mkmw.mongodb.net:27017/test?ssl=true&replicaSet=MyCluster-shard-0&authSource=admin&retryWrites=true')
    .then(
        (result)=>{
            console.log("database.js - "+result);
            callback(result);
        })
    .catch(        
        (err)=>{
            console.log("Some error occured....", err);
        }    
    );
}

module.exports = {
    'mongoConnect' : mongoConnect
};
