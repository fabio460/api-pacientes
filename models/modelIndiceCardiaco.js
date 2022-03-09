

const mongoose = require('mongoose')
const schema = mongoose.Schema({
   CPF:String,
   EPOC:String,
   ind_card:String
})

module.exports = mongoose.model('indice_card_01062021',schema)