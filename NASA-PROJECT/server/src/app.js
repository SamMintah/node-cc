const path = require("path")
const express = require("express")
const cors = require("cors")
const planetsRouter = require("./routes/planets/planets.router")

const app = express();

//middlewares
app.use(cors({
    origin:"http://localhost:3000"
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, ".." , 'public')))

//routes
app.use(planetsRouter)

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '..' ,'public' , 'index.hmtl'))
})

module.exports = app;