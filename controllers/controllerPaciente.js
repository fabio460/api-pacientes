const modelPaciente = require('../models/modelPaciente')
const model_indice_pulm = require('../models/modelIndicePulmonar')
const model_indice_card = require('../models/modelIndiceCardiaco')
exports.getClientes =async (req,res)=>{
   try {
    const p =await modelPaciente.find()
    res.send(p)
   } catch (error) {
       res.send(error)
   }
}

exports.getIndicePulmonar =async (req,res)=>{
   try {
    const p =await model_indice_pulm.find({
        CPF:req.body.CPF
    })
    res.send(p)
   } catch (error) {
       res.send(error)
   }
}
exports.getIndiceCardiaco =async (req,res)=>{
   try {
    const p =await model_indice_card.find({
        CPF:req.body.CPF
    })
    res.send(p)
   } catch (error) {
       res.send(error)
   }
}
exports.getClientesPorCpf = async (req,res)=>{
   try {
    const p =await modelPaciente.find({
        cpf:req.body.cpf
    })
    res.send(p)
   } catch (error) {
       res.send(error)
   }
}