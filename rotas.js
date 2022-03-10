const rota = require('express').Router()
const controllerPaciente = require('./controllers/controllerPaciente')
const multer = require('multer')
const path = require('path');
const crypto = require('crypto');
const config ={
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,path.resolve(__dirname,'fotos'))
        },
        filename:(req,file,cb)=>{
            crypto.randomBytes(16,(err,hash)=>{
                if(err)cb(err)
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null,fileName);
            })
        }
    })
 }



rota.get('/',(req,res)=>{
    res.send('Bem Vindo a nossa Api')
})
rota.get('/pacientes',controllerPaciente.getClientes)
rota.post('/indicepulm',multer(config).single(),controllerPaciente.getIndicePulmonar)
rota.post('/indicecard',multer(config).single(),controllerPaciente.getIndiceCardiaco)
rota.post('/getpaciente',multer(config).single(),controllerPaciente.getClientesPorCpf)

module.exports = rota
