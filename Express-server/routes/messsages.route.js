const express = require("express")
const {getMessages,postMessages } = require("../controllers/messages.controller")


const messagesRouter = express.Router();

messagesRouter.route('/').post(postMessages).get( getMessages)

module.exports = messagesRouter;
