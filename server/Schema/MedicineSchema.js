const mongoose = require("mongoose");

const Medicine = mongoose.Schema({
  medicines: {
    type: Array,
  },
  TimesAday: {
    type: Number,
  },
  FromDate: {
    type: Date,
    default: Date.now,
  },
  TillDate: {
    type: Date,
    },
  
});

const Reciept = mongoose.model("Reciept", Medicine);

module.exports = Reciept;