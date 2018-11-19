const router =  require('express').Router();

const User = require('../models/user').User;

router.post('/', (req, res, next)=>{
    //req.body['username']
    //req.body['email']
    if(!req.body['username'] || !req.body['email']){
        //if newUser is undefined
        console.log('U');
        res.status(400).json({
            'error_message' : 'User is undefined'
        });
        return;
    }

    const newUser = new User(req.body['username'], req.body['email']);   

    newUser.save()
        .then(
            (result)=>{
                res.json({
                    'message' : 'User '+req.body['username']+' successfully created.'
                });
            }
        )
        .catch(
            (error)=>{
                res.status(400).json({
                    'error_message' : error
                })
            }
        )

    //console.log(req.body['username'], req.body['email']);
});

router.get(':/userId', (req, res)=>{
    User.findById(req.params['userId'])
    .then
    (
        (result)=>{
            res.json(result);
        }   
    )
    .catch
    (
        (error)=>{
            res.status(400).json({
                'error_message' : error
            })
        }
    )
});

module.exports = router;
