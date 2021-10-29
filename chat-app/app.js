const express = require("express")
const bodyParser = require("body-parser")
const socket = require("socket.io")
const Swal = require('sweetalert2')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

var server = app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listening to port 3000")
})

var io = socket(server)

io.on('connection', (socket)=>{
    socket.on('data', (data) =>{
        io.sockets.emit('data', data)
    })
    socket.on('status', (statusName)=>{
        socket.broadcast.emit('status', statusName)
    })
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
    
})