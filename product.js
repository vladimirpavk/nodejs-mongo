const db = require('./database').getDb();

class Product {
    constructor(title, price, description, image){
        this.title = title;
        this.price = price;
        this.description = description;       
    }

    save(){
        //console.log(_db);
        /*_db.collection('products').insertOne(
            {
                'title' : this.title,
                'price' : this.price,
                'description' :  this.description
            }
        );*/

        db.collection('product').insertOne(this)
            .then(
                (result)=>{
                    console.log(result);
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