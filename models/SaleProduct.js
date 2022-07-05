const connection = require('./connection');
const { createNewSale } = require('./Sale');

const createNewSaleProducts = async (products) => {
  const { id } = await createNewSale();

  const query = 'INSERT INTO sales_products (product_id, quantity, sale_id) VALUES (?, ?, ?);';

  products.forEach(async ({ productId, quantity }) => {
    await connection.execute(query, [productId, quantity, id]);
  });

  return {
    id,
    itemsSold: products,
  };
};

module.exports = {
  createNewSaleProducts,
};
