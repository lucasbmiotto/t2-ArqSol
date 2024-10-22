const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/eventos', (req, res) => {
  const evento = req.body;

  // EVENTO -> MICROSERVICE (1:lembrete, 2:observações, 3:consulta)
  axios.post('http://localhost:4000/eventos', evento);
  axios.post('http://localhost:5000/eventos', evento);
  axios.post('http://localhost:6000/eventos', evento);

  res.status(200).send({ msg: 'Evento repassado com sucesso!' });
});

app.listen(10000, () => {
  console.log('Barramento de eventos rodando na porta 10000');
});
