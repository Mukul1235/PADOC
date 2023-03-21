const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DoctorSchema = new mongoose.Schema({
  profile: {
    type: String,
    default:"Doctor"
  },
  name: String,
  email: String,
  password: String,
  img: {
    data: Buffer,
    contentType: String,
  },
  speciality:String,
});
DoctorSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
