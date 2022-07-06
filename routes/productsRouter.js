const express = require('express');

const router = express.Router();

const Product = require('../controllers/Product');

const {
  createNewProduct,
  updateProduct,
  deleteProductController } = require('../controllers/Product');

const { validateProductName, validateProductId } = require('../middlewares/validation');

router.get('/', Product.getAll);

router.post('/', validateProductName, createNewProduct);

router.get('/:id', Product.findById);

router.put('/:id', validateProductId, validateProductName, updateProduct);

router.delete('/:id', validateProductId, deleteProductController);

module.exports = router;
