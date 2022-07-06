const express = require('express');

const router = express.Router();

const { saleProductController } = require('../controllers/SaleProducts');

const {
  allSalesController,
  getSaleByIdController,
  deleteSaleController,
  updateSaleController } = require('../controllers/Sale');

const { validateProduct, validateQuantity, validateSaleId } = require('../middlewares/validation');

router.post('/', validateProduct, validateQuantity, saleProductController);
router.get('/', allSalesController);
router.get('/:id', validateSaleId, getSaleByIdController);
router.delete('/:id', validateSaleId, deleteSaleController);
router.put('/:id', validateSaleId, validateProduct, validateQuantity, updateSaleController);

module.exports = router;
