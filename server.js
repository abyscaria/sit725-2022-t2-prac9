var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')
//var capp = cors()
//capp.use(cors())

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

/*  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  }); */
  var count = 0
  io.on('connection', (socket) => {
    console.log('User Connected',count++)
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
      console.log('message: ' + msg);
    });
  });


var server = http.listen(8080, () => {
    console.log('server is listening on port', server.address().port)
    //saveMessage(client,Message)
})