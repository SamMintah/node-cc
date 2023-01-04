const path = require('path')


function getMessages (req , res){

    res.render('messages',{
        title: "Messages to my friend",
        friend: "Elon Musk"
    })
    // res.sendFile(path.join(__dirname,"..",'public','images','skimountain.jpg'))
}

function postMessages (req , res){
    console.log('Updating message...')
}

module.exports={
    getMessages,
    postMessages
}