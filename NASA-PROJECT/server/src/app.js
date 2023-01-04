const express = require("express")
const cors = require("cors")
const planetsRouter = require("./routes/planets/planets.router")

const app = express();

//middlewares
app.use(cors({
    origin:"http://localhost:3000"
}));
app.use(express.json());

//routes
app.use(planetsRouter)



module.exports = app;