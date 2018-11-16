const router =  require('express').Router();
let Product = require('../product').Product;

router.get('/', (req, res)=>{    
    Product.fetchAll().then(
        (result)=>{
            console.log(result);
        }
    )    
});

router.get('/:prodId', (req, res)=>{
    //console.log(req.params['prodId']);
    Product.findById(req.params['prodId'])
        .then(
            (result)=>{
                console.log(result);
            }
        )
});

router.delete(':/prodId', (req, res)=>{
    //req.params['prodId']
});

router.put('/:prodId', (req, res)=>{
    //req.params['prodId']
    //req.body['name']
    //req.body['price']
});

router.post('/', (req, res)=>{    
    const newProduct = new Product(req.body['name'], req.body['price'], 'Default description');
    newProduct.save();  
});

module.exports = router;