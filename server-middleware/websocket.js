const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

app.use(cors())
io.on('connection', (socket) => {
    console.log('a user connected');
});

app.get('/', (req, res) => {
    res.send('TESTE')
})

app.listen(3001, () => {
    console.log('listening on *:3001');
});