const mongodb = require('mongodb');

const getDb = require('./database').getDb;

class Product {
    constructor(title, price, description, image){
        this.title = title;
        this.price = price;
        this.description = description;       
    }

    save(){  
        const db = getDb();
        db.collection('product').insertOne(this)
            .then(
                (result)=>{
                    console.log("Successfully added product...", this);
                }
            )
            .catch(
                (err)=>{
                    console.log("There is a problem during saving product...", err);
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
                    console.log(err);
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
            .err(
                (err)=>{
                    throw "Something bad happed...Product not found...";
                }
            )
    }

    static deleteById(prodId){
        const db = getDb();
        db.collection('product').deleteOne({
            _id: new mongodb.ObjectId(prodId)
        })
            .then(
                (result)=>{
                    console.log("Product successfully deleted...");
                }
            )
            .catch(
                (err)=>{
                    throw "Something bad happed...Product not deleted...";
                }
            );
    }

    static updateById(prodId, newValue){
        const db = getDb();
        db.collection('product').updateOne(
            {
                _id: new mongodb.ObjectId(prodId)
            },
            
        )
    }
}

module.exports = {
    'Product' : Product
}