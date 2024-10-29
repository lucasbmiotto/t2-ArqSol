const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const lembretes = {};
let contador = 0;

app.put('/lembretes', (req, res) => {
    contador++;
    const { texto } = req.body;
    lembretes[contador] = { contador, texto };
    res.status(201).send(lembretes[contador]);
});

app.get('/lembretes', (req, res) => {
    res.send(lembretes);
});

app.listen(4000, () => {
    console.log('Microsserviço de Lembretes. Porta 4000');
});
