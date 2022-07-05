const connection = require('./connection');

const createNewSale = async () => {
  const query = 'INSERT INTO sales (date) VALUES (NOW());';
  const [sale] = await connection.execute(query);

  return {
    id: sale.insertId,
    date: sale.date,
  };
};

const serializeAllSales = (sales) =>
  sales.map(({ id, date, product_id: productId, quantity }) => ({
    saleId: id,
    date,
    productId,
    quantity,
  }));

const getAllSales = async () => {
  const query = `SELECT id, date, product_id, quantity
  FROM sales AS sal
  JOIN sales_products AS spr
  ON sal.id = spr.sale_id
  ORDER BY id`;

  const [sales] = await connection.execute(query);

  return serializeAllSales(sales);
};

const serializeSaleById = (sale) =>
  sale.map(({ date, product_id: productId, quantity }) => ({
    date,
    productId,
    quantity,
  }));

const getSaleById = async (id) => { 
  const query = `SELECT date, product_id, quantity
  FROM sales AS sal
  JOIN sales_products AS spr
  ON sal.id = spr.sale_id
  WHERE id = ?
  ORDER BY id, product_id;`;

  const [sale] = await connection.execute(query, [id]);

  return serializeSaleById(sale);
};

module.exports = {
  createNewSale,
  getAllSales,
  getSaleById,
};
