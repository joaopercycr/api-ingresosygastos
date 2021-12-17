/*const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('hello world')
})

server.listen(3000)
console.log('server running')*/

const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('<h1>Hola Joao</h1>'))
app.listen(3000)
console.log('express execute')