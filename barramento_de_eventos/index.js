const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/eventos', async (req, res) => {
    const evento = req.body;
    try {
        await axios.post('http://localhost:4000/eventos', evento);  // Lembretes
        await axios.post('http://localhost:5000/eventos', evento);  // Observações
        await axios.post('http://localhost:6000/eventos', evento);  // Consulta
        await axios.post('http://localhost:7000/eventos', evento);  // Classificação
    } catch (err) {
        console.log('Erro ao propagar evento:', err.message);
    }
    res.status(200).send({ msg: 'Evento propagado com sucesso!' });
});

app.listen(10000, () => {
    console.log('Barramento de Eventos. Porta 10000');
});
    