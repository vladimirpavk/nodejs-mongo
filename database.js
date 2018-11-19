const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) =>{    
    MongoClient.connect('mongodb://localhost:27017/testBaza', {useNewUrlParser: true})
    .then(
        (client)=>{   
            _db = client.db();
            return callback();                           
        })
    .catch(        
        (err)=>{
            return console.log("Something bad happened. Could not connect to mongo...");
        }    
    );
}

const getDb = () =>{    
    if(_db){
        return _db;
    }
    throw "No database connected";
}

module.exports = {
    'mongoConnect' : mongoConnect,
    'getDb' : getDb
};
