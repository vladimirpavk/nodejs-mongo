const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    console.log("get");
    next();
});

router.post('/', (req, res, next)=>{
    console.log("post");
    next();
});

module.exports = router;