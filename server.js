import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const sockets = new Server(server);

app.use(express.static('public'));


sockets.on('connect',(command)=>{
    console.log('someone has connected '+ command.id);
})


server.listen(3000, () => console.log('app is running on localhost:3000'))