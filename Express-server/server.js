const express = require("express");
const friendsRouter = require("./routes/friends.route") 
const messagesRouter = require("./routes/messsages.route")


const app = express();
const PORT = 5000;

//middleware
app.use((req,res,next)=>{
   const start = Date.now();
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.static('public'))
app.use(express.json())

//routes 
app.use('/friends', friendsRouter)
app.use("/message",messagesRouter)

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}..`)
}) 