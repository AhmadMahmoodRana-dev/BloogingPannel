import express from "express";
import connectDb from "./config/connectDb.js";
import "dotenv/config.js";
import mainRoutes from "./routes/Main.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

mainRoutes(app);



connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
