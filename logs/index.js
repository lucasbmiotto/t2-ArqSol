const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const logs = [];
let id = 1;

app.post('/eventos', (req, res) => {
    const { tipo, dados } = req.body;

    const registro = {
        id: id++,
        tipo_evento: tipo,
        data_hora: new Date().toISOString(),
        dados
    };
    logs.push(registro);
    console.log(`Evento registrado: ${JSON.stringify(registro)}`);
    res.status(200).send({ msg: "Log registrado com sucesso!" });
});

// Usa o /log pro GET no postman (vai ter que retornar todos os logs)
app.get('/logs', (req, res) => {
    res.send(logs);
});

app.listen(8000, () => {
    console.log('Microsserviço de Logs. Porta 8000');
});
