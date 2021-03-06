const express = require('express')  
require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(cors())
const conexao = require('./conexao')
conexao()
const rota = require('./rotas')
app.use(rota)
const PORT = process.env.PORT || 3001;

app.listen(PORT)