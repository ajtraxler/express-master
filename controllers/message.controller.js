const messageModel = require("../models/message.model");

const getMessages = (req, res, next) => {
  const messages = messageModel.findMessages();
  res.status(200);
  res.json(messages);
};

const postMessage = (req, res) => {
  try{
  const newMessage = req.body;
  const savedMessage = messageModel.createMessage(newMessage);
  res.status(201);
  res.json(savedMessage);}
  catch(err){
    res.status(500);
    res.end('Server error')


  }
};

module.exports = { getMessages, postMessage };
