app.post('/eventos', async (req, res) => {
    const evento = req.body;

    try {
        // Lembretes
        await axios.post('http://localhost:4000/eventos', evento);  
        // Observações
        await axios.post('http://localhost:5000/eventos', evento);  
        // Consulta
        await axios.post('http://localhost:6000/eventos', evento);  
        // Classificação
        await axios.post('http://localhost:7000/eventos', evento);  
        // Logs
        await axios.post('http://localhost:8000/eventos', evento);  
    } catch (err) {
        console.log('Erro ao propagar evento:', err.message);
    }

    res.status(200).send({ msg: 'Evento propagado com sucesso!' });
});
