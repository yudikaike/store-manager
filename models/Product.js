const connection = require('./connection');

const getAllProducts = async () => {
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

const createNewProduct = async (name) => {
  const query = 'INSERT INTO products (name) VALUES (?)';
  const [product] = await connection.execute(query, [name]);

  return {
    id: product.insertId,
    name,
  };
};

const updateProduct = async (name, id) => {
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);

  return {
    id,
    name,
  };
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = {
  getAllProducts,
  findById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};