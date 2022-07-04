const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT id, name FROM products ORDER BY id;',
  );
  return products;
};

const findById = async (id) => {
  const query = 'SELECT id, name FROM products WHERE id = ?;';
  const [product] = await connection.execute(query, [id]);

  return product;
};

module.exports = {
  getAll,
  findById,
};