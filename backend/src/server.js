import express from "express";
import connectDb from "./config/connectDb.js";
import "dotenv/config.js";
import mainRoutes from "./routes/Main.route.js";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type"],
  }
});

export { io };

app.use(express.json());
app.use(cors());

mainRoutes(app);

io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
  });

  // Example custom event
  socket.on("example_event", (data) => {
    console.log("Received example_event with data:", data);
    // Echo back to the client
    socket.emit("example_response", { message: "Received your data", data });
  });
});

connectDb()
  .then(() => {
    httpServer.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
