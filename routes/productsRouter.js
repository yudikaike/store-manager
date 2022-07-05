const express = require('express');

const router = express.Router();

const Product = require('../controllers/Product');

const { createNewProduct } = require('../controllers/Product');

const { validateProductName } = require('../middlewares/validation');

router.get('/', Product.getAll);

router.post('/', validateProductName, createNewProduct);

router.get('/:id', Product.findById);

module.exports = router;
