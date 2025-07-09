const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {origin: "http://localhost:5173"}
});


io.on("connection", () => {
    console.log("client connected to server")
  });



httpServer.listen(3000);