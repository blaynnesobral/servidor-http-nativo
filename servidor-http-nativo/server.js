import http from 'node:http'

const porta = 3000

const produtos = [
    { id: 1, nome: "Sabonete" },
    { id: 2, nome: "Volante LogiTech G923" },
    { id: 3, nome: "Sabão em Pó" },
    { id: 4, nome: "Pelúcia do Sonic" },
]

const server = http.createServer((req, res) => {

    // Mostra no terminal o método e a URL da requisição
    console.log(req.method, req.url)

    res.setHeader('Content-Type', 'application/json; charset=utf-8')

    if (req.method == "GET" && req.url == "/contato") {
        res.statusCode = 200
        return res.end(JSON.stringify({
            data: {
                numero_telefone: "67 99999 9999",
                endereco: "Rua da Alegria, 99, Centro"
            }
        }))
    }

    if (req.method == "GET" && req.url == "/produtos") {
        res.statusCode = 200
        return res.end(JSON.stringify(produtos))
    }

    if (req.method == "GET" && req.url == "/status") {
        res.statusCode = 200
        return res.end(JSON.stringify({
            status: "ok"
        }))
    }

    if (req.method == "GET" && req.url == "/") {
        res.statusCode = 200
        return res.end(JSON.stringify({
            data: "Página Inicial"
        }))
    }

    res.statusCode = 404
    res.end("Rota não encontrada")
})

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
})