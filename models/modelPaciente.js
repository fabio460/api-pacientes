const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome:String,
    idade:String,
    cpf:String,
    rg:String,
    data_nasc:String,
    sexo:String,
    signo:String,
    mae:String,
    pai:String,
    email:String,
    cep:String,
    endereco:String,
    numero:String,
    bairro:String,
    cidade:String,
    estado:String,
    telefone:String,
    celular:String,
    altura:String,
    peso:String,
    tipo_sanguineo:String,
    cor:String
})

module.exports = mongoose.model('pacientes',schema)