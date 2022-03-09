const mongoose = require('mongoose')
const schema = mongoose.Schema({
   CPF:String,
   EPOC:String,
   ind_pulm:String
})

module.exports = mongoose.model('indice_pulm_01062021',schema)