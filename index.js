const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('PetPay - Versão 2.0 no ar!');
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});