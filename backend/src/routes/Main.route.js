import route from "./Central.route.js";

const mainRoutes = (app) =>{
app.use("/api",route)
}

export default mainRoutes;