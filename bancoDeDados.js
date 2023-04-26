const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o Banco de Dados iniciou')

        await mongoose.connect('mongodb+srv://juliana2317js:GmgpuG0lnNSgjelD@clustermulheres.y8kld2m.mongodb.net/?retryWrites=true&w=majority')

        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados
  

