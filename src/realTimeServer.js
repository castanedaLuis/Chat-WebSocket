module.exports = httpServer => {

    const { Server } = require("socket.io");
    const io = new Server(httpServer);

    io.on("connection", socket => {

        //obteniendo la cookie desde sockets io
        const cookie = socket.handshake.headers.cookie;
        const username = cookie.split('=').at(-1);

        //escuchamos el evento message que emiten y emitimos un evento para todos
        socket.on('message', (message) => {

            io.emit('messageAll', {
                user: username,
                message
            })

        });

    });

}