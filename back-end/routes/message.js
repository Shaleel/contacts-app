const express = require("express");
const router = express.Router();
const Message = require("../controllers/message");

router.post("/send-message", Message.create);
router.get("/list", Message.list);
module.exports = router;
