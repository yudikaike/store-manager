const express = require('express');

const router = express.Router();

const Product = require('../controllers/Product');

const {
  createNewProduct,
  updateProduct,
  deleteProductController,
  searchProductController } = require('../controllers/Product');

const { validateProductName, validateProductId } = require('../middlewares/validation');

router.get('/', Product.getAll);
router.get('/search', searchProductController);
router.get('/:id', Product.findById);
router.post('/', validateProductName, createNewProduct);
router.put('/:id', validateProductId, validateProductName, updateProduct);
router.delete('/:id', validateProductId, deleteProductController);

module.exports = router;
