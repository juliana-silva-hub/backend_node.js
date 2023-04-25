const express = require("express") // estou iniciando o express
const router = express.Router() // aqui estou configurando a primeira parte da rota

const app = express() // aqui estou iniciando o app
const porta = 3333 // aqui estou criando a porta

// aqui estou criando lista inicial de mulheres
const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora de Software e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://bit,ly/3FKpFaz',
        minibio: 'Hacker antirracista'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}
//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) // configurei rota GET /mulheres
app.listen(porta, mostraPorta) // servidor ouvindo a porta