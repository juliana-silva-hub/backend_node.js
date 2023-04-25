const express = require("express") // estou iniciando o express
const router = express.Router() // aqui estou configurando a primeira parte da rota
const { v4: uuid4 } = require('uuid')

const app = express() // aqui estou iniciando o app
const porta = 3333 // aqui estou criando a porta

// aqui estou criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora de Software e Instrutora'
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        id: '3',
        nome: 'Nina da Hora',
        imagem: 'https://bit,ly/3FKpFaz',
        minibio: 'Hacker antirracista'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuid4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) // configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei rota POST /mulheres
app.listen(porta, mostraPorta) // servidor ouvindo a porta