const db = require("../db");

function findMessages() {//runs db query to get messages
  return db.msgs;
}

function createMessage(message) {
  db.msgs.push(message);
  return message;
}

module.exports = { findMessages, createMessage };
