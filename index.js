const express = require('express');

const server = express();

server.use(express.json());

const nomes = ['Kauan Linhares', 'Cibelle F', 'csgo'];

// Retorna um nome
server.get('/nomes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(nomes[index]);
})

// Retornar todas os nomes
server.get('/nomes', (req,res) => {
    return res.json(nomes);
})

// Criar um novo curso
server.post('/nomes', (req, res) => {
    const { name } = req.body;
    nomes.push(name);

    return res.json(nomes);
});

// Atualizar um curso
server.put('/nomes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    nomes[index] = name;

    return res.json(nomes);
});

// Deletar um curso
server.delete('/nomes/:index', (req, res) =>{
    const { index } = req.params;

    nomes.splice(index, 1);
    return res.json({ message: "O curso foi deletado"})
});






server.listen(3000);