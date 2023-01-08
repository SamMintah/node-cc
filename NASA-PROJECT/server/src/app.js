const path = require("path")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const planetsRouter = require("./routes/planets/planets.router")
const launchesRouter = require("./routes/launches/launches.router")
const app = express();

//middlewares
app.use(cors({
    origin:"http://localhost:3000"
}));

// morgan middleware logs activies 
app.use(morgan('combined'))

app.use(express.json());
app.use(express.static(path.join(__dirname, ".." , 'public')))

//routes
app.use("/planets",planetsRouter)
app.use("/launches",launchesRouter)


app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname, '..' ,'public' , 'index.hmtl'))
})

module.exports = app