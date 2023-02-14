module.exports = httpServer => {

    const { Server } = require("socket.io");
    const io = new Server(httpServer);

    io.on("connection", socket => {

        //escuchamos el evento message que emiten y emitimos un evento para todos
        socket.on('message',(message) =>{
            io.emit('messageAll', {
                user:'Luis', 
                message
            })
        });

    });

}