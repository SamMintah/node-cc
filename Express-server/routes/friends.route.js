const express = require("express")
const {getFriends,getfriend,postFriend } = require("../controllers/friends.controller")

const friendsRouter = express.Router();


friendsRouter.route("/").post(postFriend).get( getFriends)
friendsRouter.route('/:friendId').get(getfriend)

module.exports = friendsRouter;
