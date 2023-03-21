const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const patientSchema = new mongoose.Schema({
  profile: {
    type: String,
    default: "Patient",
  },
  name: String,
  email: String,
  password: String,

});

patientSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});
const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
