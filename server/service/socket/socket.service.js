const io = require('socket.io');

function socketServer(server){
    let socketCLI = {
        socketListner: io.listen(server),
        receive: function(event,callback){
            socketListner.sockets.on(event,callback);
        },
        send: function(event,data){
            socketListners.socket.emit(event,data);
        }
    }
    return socketCLI;
}

export default socketServer;