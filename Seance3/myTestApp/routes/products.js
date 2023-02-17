var express = require('express');
var router = express.Router();
var products = require('../products.json')

router.get('/', (req, res, next) =>{
    res.json({
        products
    })
});

  router.get('/:id',(req,res,next)=>{
    res.json({
        product: products.id[req.params.id]
    })
});

module.exports = router;