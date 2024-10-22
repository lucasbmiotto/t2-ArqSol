const express = require('express');
const app = express();
app.use(express.json());

const logs = [];

app.post('/eventos', (req, res) => {
  const log = { ...req.body, dataHora: new Date().toISOString() };
  logs.push(log);
  res.status(200).send({ msg: 'Log registrado!' });
});

app.get('/logs', (req, res) => {
  res.send(logs);
});

app.listen(7000, () => {
  console.log('Microsserviço de Logs rodando na porta 7000');
});
