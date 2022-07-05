const express = require('express');

const router = express.Router();

const Product = require('../controllers/Product');

const {
  createNewProduct,
  updateProduct,
  deleteProductController } = require('../controllers/Product');

const { validateProductName, validateId } = require('../middlewares/validation');

router.get('/', Product.getAll);

router.post('/', validateProductName, createNewProduct);

router.get('/:id', Product.findById);

router.put('/:id', validateId, validateProductName, updateProduct);

router.delete('/:id', validateId, deleteProductController);

module.exports = router;
