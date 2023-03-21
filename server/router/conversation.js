const express = require("express");
const router = express.Router();
const Conversation = require("../Schema/Conversation.js");


//NEW CONVERSATION
router.post("/", async (req, res) => {
    const newConversation = new Conversation({
    members: [req.body.senderId, req.body.recieverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Show all doctor available
// router.post("/")

//GET CONVERSATION OF A USER
router.get("/:userId", async (req, res) => {
  try {
      const newconversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(newconversation);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
