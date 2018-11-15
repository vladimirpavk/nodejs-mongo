const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) =>{    
    MongoClient.connect('mongodb://localhost:27017/testBaza', {useNewUrlParser: true})
    .then(
        (client)=>{   
            _db = client.db();
            callback();                           
        })
    .catch(        
        (err)=>{
            throw "Some error occured...",err;
        }    
    );
}

const getDb = () =>{
    console.log("getDb() running...");
    if(_db){
        return _db;
    }
    throw "No database connected";
}

module.exports = {
    'mongoConnect' : mongoConnect,
    'getDb' : getDb
};
