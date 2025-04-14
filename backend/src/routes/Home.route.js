import { Router } from "express";

const Home = Router();

Home.get('/', (req, res) => {
  res.send("Home Page");
});


export default Home;