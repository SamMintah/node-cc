const express = require("express")
const {getFriends,getfriend,postFriend } = require("../controllers/friends.controller")

const friendsRouter = express.Router();

friendsRouter.use()

friendsRouter('/').post(postFriend).get( getFriends)
friendsRouter('/:friendId').get(getfriend)

module.exports = friendsRouter;
