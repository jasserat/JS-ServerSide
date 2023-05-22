const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("A user has connected");
    io.emit("msg", "A user has connected");

    socket.on("msg", (data) => {
        io.emit("msg", data);
    });

    socket.on("disconnect", () => {
        io.emit("msg", "A user has been disconnected...");
    });
});
server.listen(3000);