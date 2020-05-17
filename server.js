const express = require('express'); //importa o express
const mongoose = require('mongoose'); //importa o mongoose(Dependência que permite realizar ações no banco JS
const requireDir = require('require-dir'); //importa o require-dir(Dependinca para não precisar especificar qual model referenciar)
const cors = require('cors'); //importa o cors(Utilizado para permitir que endereços externos acessem a API)

// Inicia o App
const app = express();

app.use(express.json());
app.use(cors());//Passa rconfigurações de segurança. Ex: Quais domínios terão acesso 

// Inicia DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser:true, useUnifiedTopology: true }); //Se tiver usuario e senha informar na URL com user@password
requireDir('./src/models');

//Arquivo de rotas
app.use('/api', require('./src/routes'));

//Escuta a porta 3001
app.listen(3001);