const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const observacoesPorLembreteId = {};

app.put('/lembretes/:id/observacoes', (req, res) => {
    const observacoes = observacoesPorLembreteId[req.params.id] || [];
    const { texto } = req.body;
    observacoes.push({ texto });
    observacoesPorLembreteId[req.params.id] = observacoes;
    res.status(201).send(observacoes);
});

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.listen(5000, () => {
    console.log('Microsserviço de Observações. Porta 5000');
});
