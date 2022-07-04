const Product = require('../models/Product');

const getAll = async () => {
  const products = await Product.getAll();

  return products;
};

const findById = async (id) => {
  const product = await Product.findById(id);

  if (product.length === 0) return null;

  return product[0];
};

module.exports = {
  getAll,
  findById,
};
