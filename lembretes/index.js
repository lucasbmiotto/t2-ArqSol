const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

let lembretes = {};
let contador = 0;

app.get('/lembretes', (req, res) => {
  res.send(lembretes);
});

app.post('/lembretes', (req, res) => {
  contador++;
  const { texto } = req.body;
  lembretes[contador] = { contador, texto };
  res.status(201).send(lembretes[contador]);
});

app.listen(4000, () => {
  console.log('Microsserviço de Lembretes rodando na porta 4000');
});
