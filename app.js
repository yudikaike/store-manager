const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const productsRouter = require('./routes/productsRouter');

app.use('/products', productsRouter);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;