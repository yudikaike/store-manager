const express = require('express');

const router = express.Router();

const Product = require('../controllers/Product');

const { createNewProduct, updateProduct } = require('../controllers/Product');

const { validateProductName, validateUpdateId } = require('../middlewares/validation');

router.get('/', Product.getAll);

router.post('/', validateProductName, createNewProduct);

router.get('/:id', Product.findById);

router.put('/:id', validateUpdateId, validateProductName, updateProduct);

module.exports = router;
