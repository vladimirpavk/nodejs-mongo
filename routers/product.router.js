const router =  require('express').Router();
let Product = require('../models/product').Product;

router.get('/', (req, res)=>{    
    Product.fetchAll()
        .then(
            (result)=>{
                res.json(result);
            }
        )    
        .catch(
            (err)=>{
                res.statusCode(400).json({
                    'message' : err
                })
            }
        );
});

router.get('/:prodId', (req, res)=>{    
    Product.findById(req.params['prodId'])
        .then(
           (result)=>{
               res.json(result);
            }
        )
        .catch(
            (err)=>res.statusCode(400).json({
                'error_msg' : err
            })
        );
});

router.delete('/:prodId', (req, res)=>{   
    Product.deleteById(req.params['prodId'])
    .then(
        (result)=>{
            res.json({
                'message' : 'Object ' + req.params['prodId'] + ' deleted.'
            });
         }
     )
     .catch(
         (err)=>res.statusCode(400).json({
             'error_msg' : err
         })
     );
});

router.put('/:prodId', (req, res)=>{
    const updatedProduct = new Product(req.body['name'], req.body['price'], 'Default description');
    updatedProduct.updateById(req.params['prodId'])
    .then(
        (result)=>{          
            res.json({
                'message' : 'Product updated...'
            })
        }
    )
    .catch(
        (err)=>res.statusCode(400).json({
            'error_msg' : err
        })
    )
});

router.post('/', (req, res)=>{    
    const newProduct = new Product(req.body['name'], req.body['price'], 'Default description');
    newProduct.save()
    .then(
        (result)=>{
            res.json({
                'message' : 'Product saved'
            })
        }
    )
    .catch
    (
        (err)=>res.statusCode(400).json({
            'error_msg' : err
        })
    )
});

module.exports = router;