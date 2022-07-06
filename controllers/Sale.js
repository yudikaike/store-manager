const { getAllSales, getSaleById, deleteSale } = require('../models/Sale');

const allSalesController = async (_req, res) => {
  const sales = await getAllSales();

  res.status(200).json(sales);
};

const getSaleByIdController = async (req, res) => {
  const { id } = req.params;

  const sale = await getSaleById(id);

  res.status(200).json(sale);
};

const deleteSaleController = async (req, res) => {
  const { id } = req.params;

  await deleteSale(id);

  res.status(204).end();
};

module.exports = {
  allSalesController,
  getSaleByIdController,
  deleteSaleController,
};
