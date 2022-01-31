const { Router } = require("express");
const messageController = require("./controllers/message.controller");

const router = Router();
//router level middleware work just like application level middleware except they aare bound
//to an instance of express.router()

router.get("/messages", messageController.getMessages);
router.post("/messages", messageController.postMessage);

module.exports = router;