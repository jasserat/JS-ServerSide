const express = require("express");
const http = require("http");
var path = require("path");
const chatRouter = require("./routes/chat.js");

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use('/chat', chatRouter);

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


server.listen(3000, () => { console.log("Server is running...") });


