const express = require("express")
const server = express()
const data = require('./data.json')

server.use(express.json())

server.get('/clients', (req, res) => {
    res.json(data)
})
server.get('/clients/:id', (req, res) => {
    const { id } = req.params
    const client = data.find(cli => cli.id == id)
    if (!client) return res.status(204).json()
    res.json(client)
})


server.post('/clients', (req, res) => {
    const { name, email } = req.body
    //salvar
    res.json({ name, email })

})


server.put('/clients/:id', (req, res) => {
    const { id } = req.params
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(204).json()
    const { name, email } = req.body
    client.name = name
    client.email = email
    res.json({ client })


})



server.delete('/clients/:id', (req, res) => {
    const { id } = req.params
    const clientsFiltered = data.filter(client => client.id != id)

    res.json(clientsFiltered)


})

//retirar objetos json do site: [https://jsonplaceholder.typicode.com/users]
//Insomnia URL_Base: http://localhost:3000/clients

server.listen(3000, function () {
    console.log("server is running")
}) //CallBack Function()