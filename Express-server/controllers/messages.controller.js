function getMessages (req , res){
    res.send('<ul><li>Hello Sam</li></ul>')
}

function postMessages (req , res){
    console.log('Updating message...')
}

module.exports={
    getMessages,
    postMessages
}