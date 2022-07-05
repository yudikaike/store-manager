const Product = require('../models/Product');

const getAll = async () => {
  const products = await Product.getAllProducts();

  return products;
};

const findById = async (id) => {
  const product = await Product.findById(id);

  if (product.length === 0) return null;

  return product[0];
};

const isValid = (name) => {
  if (!name || typeof name !== 'string') return false;

  return true;
};

const createNewProduct = async (name) => {
  if (!isValid(name)) return null;

  const product = await Product.createNewProduct(name);

  return product;
};

const updateProduct = async (name, id) => {
  const product = await Product.updateProduct(name, id);

  return product;
};

module.exports = {
  getAll,
  findById,
  createNewProduct,
  updateProduct,
};
