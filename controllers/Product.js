const Product = require('../services/Product');

const getAll = async (_req, res) => {
  const products = await Product.getAll();

  res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });

  res.status(200).json(product);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;

  const product = await Product.createNewProduct(name);

  res.status(201).json(product);
};

module.exports = {
  getAll,
  findById,
  createNewProduct,
};