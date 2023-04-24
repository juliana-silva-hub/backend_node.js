const express = require("express")
const router = express.Router()
const app = express()


app.use(express.json())


const PORTA = 3333

function mostraHora(req, res) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    res.send(hora)
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta, ${PORTA}")
}

app.use(router.get('/hora', mostraHora))
app.listen(PORTA, mostraPorta)