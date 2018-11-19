const mongodb = require('mongodb');

const getDb = require('../database').getDb;

class Product {
    constructor(title, price, description){
        this.title = title;
        this.price = price;
        this.description = description;       
    }

    save(){  
        const db = getDb();
        return db.collection('product').insertOne(this)
            .then(
                (result)=>{
                    console.log("Successfully added product...");
                }
            )
            .catch(
                (err)=>{
                    console.log("Something bad happened. Product not added...", err);
                }
            );
    }

    static fetchAll(){
        const db = getDb();
        return db.collection('product').find().toArray()
            .then(
                (result)=>{                    
                    return result;
                }
            )
            .catch(
                (err)=>{
                    console.log('err');
                    console.log('Something bad happened. Product(s) not found...');
                }
            );
    }

    static findById(prodId){
        const db = getDb();
        return db.collection('product').find(
            {
                _id: new mongodb.ObjectId(prodId)
            })
            .next()
            .then(
                (product)=>product
            )
            .catch(
                (err)=>{
                    return "Something bad happed...Product not found...";
                }
            )
    }

    static deleteById(prodId){       
        const db = getDb();
        return db.collection('product').deleteOne({
            _id: new mongodb.ObjectId(prodId)
        })
        .then(
            (result)=>result
        )
        .catch(
            (err)=>err            
        );          
    }

    updateById(prodId){
        const db = getDb();
        return db.collection('product').updateOne(
            {
                _id: new mongodb.ObjectId(prodId)
            },
            {
                $set: this
            }
        )
        .then(
            (res)=>{
                console.log(res);                
            }
        )
        .catch(
            (err)=>{
                console.log(err);
            }
        );
    }
}

module.exports = {
    'Product' : Product
}