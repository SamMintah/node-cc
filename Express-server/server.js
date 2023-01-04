const express = require("express");
const path = require('path')
const friendsRouter = require("./routes/friends.route") 
const messagesRouter = require("./routes/messsages.route")


const app = express();

//views "template engine"
app.set("view engine" , 'hbs');
app.set("views" ,path.join(__dirname,'views'));

const PORT = 5000;

//middleware
app.use((req,res,next)=>{
   const start = Date.now();
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use("/site",express.static(path.join(__dirname,'public')))
app.use(express.json())

//root route
app.get('/',(req,res)=>{
   res.render('index' , {
    title: 'My cool site',
    caption:'Let\'s go skiing',
   });
})

//routes 
app.use('/friends', friendsRouter)
app.use("/message",messagesRouter)

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}..`)
}) 