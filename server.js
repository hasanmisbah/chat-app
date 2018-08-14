
let express = require('express');

let http = require('http');
let path = require('path');

let app = express();
let server = http.Server(app);
let io = require('socket.io')(server);

let users = [];

server.listen(9000, ()=> {
    console.log('server has been started at http://localhost:9000');
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.use(express.static(path.join(__dirname, '/app')));


io.on('connection', (socket) => {
    let name;

    socket.on('has connected', (username) => {
        name = username;
        users.push(username);
        io.emit('has connected', {username : username, userlist : users});

    });

    socket.on('disconnect', () =>{
        users.splice(users.indexOf(name), 1);
        io.emit('has disconnected', {username : name, userlist : users});
    });

    socket.on('messages', (messages) =>{
        io.emit('messages', messages, name);
    });
})