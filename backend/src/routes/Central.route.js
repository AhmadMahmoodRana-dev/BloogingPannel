import { Router } from "express";
import Home from "./Home.route.js";
import Authentication from "./Auth.route.js";

const route = Router();

route.use("/auth",Authentication)
route.use("/main",Home)

export default route;