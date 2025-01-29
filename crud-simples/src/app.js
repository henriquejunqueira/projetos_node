const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.json('Hello World!');
});

app.listen(port, hostname, () => {
  console.log(`Servidor rodando: http://${hostname}:${port}`);
});
