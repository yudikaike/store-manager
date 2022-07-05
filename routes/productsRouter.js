const express = require('express');

const router = express.Router();

const Product = require('../controllers/Product');

router.get('/', Product.getAll);

router.post('/', Product.createNewProduct);

router.get('/:id', Product.findById);

module.exports = router;
