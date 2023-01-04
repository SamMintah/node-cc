const friends = require('../models/friends.model')


function getFriends(req,res){
    res.json(friends);
}


function getfriend(req,res){
    const friendId = Number(req.params.friendId)
    const friend = friends[friendId];
  

    if(friend){
      res.json(friend);
    }else{
     res.status(404).json({
      error: " friend not found"
     })
    }  
}

function postFriend(req,res){
    if (!req.body.name) {
      return res.status(400).json({
          error: "Missing friend name"
      })
    }
    const newFriend = {
      name: req.body.name,
      id: friends.length
    }
    friends.push(newFriend)
        res.json(newFriend)
  }



module.exports ={
    getFriends,
    postFriend,
    getfriend
  }