const connection = require('./connection');

const createNewSale = async () => {
  const query = 'INSERT INTO sales (date) VALUES (NOW());';
  const [sale] = await connection.execute(query);

  return {
    id: sale.insertId,
    date: sale.date,
  };
};

module.exports = {
  createNewSale,
};
