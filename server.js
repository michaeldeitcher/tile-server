var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 5000});
var source = null;
var destination = null;
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        if(message === 'receiving') {
            destination = ws;
            return;
        }
        if(message === 'sending') {
            source = ws;
            return;
        }
        if(ws === source && destination != null){
            destination.send(message);
            return;
        }
    });
});