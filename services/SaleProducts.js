const { createNewSaleProducts } = require('../models/SaleProduct');

const saleProducts = async (products) => { 
  const sale = await createNewSaleProducts(products);

  return sale;
};

module.exports = {
  saleProducts,
};