const express = require('express');
const app = express();
app.use(express.json());

const baseConsulta = {};

app.post('/eventos', (req, res) => {
  const { tipo, dados } = req.body;

  if (tipo === 'LembreteCriado') {
    baseConsulta[dados.contador] = { ...dados, observacoes: [] };
  }

  if (tipo === 'ObservacaoCriada') {
    const observacoes = baseConsulta[dados.lembreteId].observacoes || [];
    observacoes.push(dados);
    baseConsulta[dados.lembreteId].observacoes = observacoes;
  }

  res.status(200).send(baseConsulta);
});

app.get('/lembretes', (req, res) => {
  res.send(baseConsulta);
});

app.listen(6000, () => {
  console.log('Microsserviço de Consulta rodando na porta 6000');
});
