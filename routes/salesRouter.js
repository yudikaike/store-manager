const express = require('express');

const router = express.Router();

const { saleProductController } = require('../controllers/SaleProducts');

const { validateProduct, validateQuantity } = require('../middlewares/validation');

router.post('/', validateProduct, validateQuantity, saleProductController);

module.exports = router;
