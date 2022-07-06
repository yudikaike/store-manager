const { getAllProducts } = require('../models/Product');
const { getAllSales } = require('../models/Sale');

const validateProductName = (req, res, next) => {
  const { name } = req.body;

  if (!name) { 
    return res.status(400).json({ message: '"name" is required' });
  }

  if (name.length < 5) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

const validateProduct = async (req, res, next) => {
  const products = req.body;

  if (products.some(({ productId }) => productId === undefined)) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  const allProducts = await getAllProducts();
  const allProductIds = allProducts.map(({ id }) => id);

  if (products.some(({ productId }) => allProductIds.every((id) => productId !== id))) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

const validateQuantity = (req, res, next) => {
  const products = req.body;

  if (products.some(({ quantity }) => quantity === undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (products.some(({ quantity }) => quantity <= 0)) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const validateSaleId = async (req, res, next) => {
  const { id } = req.params;

  const allSales = await getAllSales();

  if (allSales.every(({ saleId }) => saleId !== Number(id))) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  next();
};

const validateProductId = async (req, res, next) => {
  const { id: queryId } = req.params;

  const allProducts = await getAllProducts();

  if (allProducts.every(({ id }) => id !== Number(queryId))) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = {
  validateProductName,
  validateProduct,
  validateQuantity,
  validateSaleId,
  validateProductId,
};
