const express = require('express');
const path = require('path');
const { createServer } = require('http');
const realtimeServer = require('./realTimeServer');


const app = express();
const httpServer = createServer(app);

//Settings
app.set('port', process.env.PORT || 3030);
app.set("views", path.join(__dirname, "views"));

//Routes
app.use(require('./routes'));


//Public
app.use(express.static(path.join(__dirname, 'public')));

//Levanto el servicor 
httpServer.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
});

//llamo al servidor de  websocket
realtimeServer(httpServer);
