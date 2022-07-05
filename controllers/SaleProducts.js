const { saleProducts } = require('../services/SaleProducts');

const saleProductController = async (req, res) => {
  const products = req.body;

  const sale = await saleProducts(products);

  res.status(201).json(sale);
};

module.exports = {
  saleProductController,
};
