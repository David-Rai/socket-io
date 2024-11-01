const express = require('express')
const app = express()
const port =1111
const http=require('http')
const {Server}=require('socket.io')

const server=http.createServer(app)//creating http server
const io=new Server(server)
app.use(express.static('public'))

//Socket io
io.on('connection',client =>{

    //readcing clinet sended data
client.on("user-message",(message)=>{
    io.emit('message',message)//brocasting the message
console.log(`user ${client.id} message = ${message}`)
})

client.on("disconnect",()=>{
    console.log("user disconnectted")
})
})

app.get('/', (req, res) => {
res.sendFile('/public/index.html')
})


server.listen(port,()=> console.log("server is sunning"))