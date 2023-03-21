const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema({
  title: String,
  content: String,
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
