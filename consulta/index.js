const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const lembretesComObservacoes = {};

app.get('/lembretes', (req, res) => {
    res.send(lembretesComObservacoes);
});

app.listen(6000, () => {
    console.log('Microsserviço de Consulta. Porta 6000');
});
