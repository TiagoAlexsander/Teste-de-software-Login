// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // permite requisições do navegador
app.use(express.json());

app.get('/login', (req, res) => {
    const { cpf, senha, operacao } = req.query;

    if (operacao === 'handleLogin') {
        if (cpf === '123.456.789-00' && senha === 'senha123') {
            res.json({
                status: 'sucesso',
                mensagem: 'Login realizado com sucesso'
            });
        } else {
            res.json({
                status: 'erro',
                mensagem: 'CPF ou senha inválidos'
            });
        }
    } else {
        res.json({
            status: 'erro',
            mensagem: 'Operação desconhecida'
        });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});