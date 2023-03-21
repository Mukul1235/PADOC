const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Patient = require("../Schema/PatientSchema");
const Doctor = require("../Schema/DoctorSchema");
const Feedback = require("../Schema/FeedbackSchema");
const Conversation = require("../Schema/Conversation.js");
const Message = require("../Schema/Message");
const { find } = require("../Schema/PatientSchema");



router.post("/register/:id", async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password  || !name) {
    return res.status(422).json({ error: "Plz fill the field properly" });
  }
  var userExists=1;
  const x = req.params.id;
  if (x === "patient") {
     userExists = await Patient.findOne({ email: email });
  }
  else {
     userExists = await Doctor.findOne({ email: email });
  }
     if (userExists) {
       return res.status(422).json({ error: "Email already exists" });
     }
     
  if (x === "patient") {
    const patient = new Patient({ name, email, password });
    patient.save();
  }
  else {
    const { speciality } = req.body;
    const doctor = new Doctor({
      name,
      email,
      password,
      speciality
    });
    doctor.save();
  }
     return res.status(201).json({ message: `${x} registered successfully`});  
});



//LOGIN
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ error: "Plz fill data" });
    }
    const doctor = await Doctor.findOne({ email: email });
    const patient = await Patient.findOne({ email: email });

    if (doctor) {
      bcrypt.compare(password, doctor.password, (err, data) => {
        if (err) throw err
        if (data) {
          return res.status(201).json(doctor);
        }
        else {
          return res.status(403).json({ message: "invalid password " });
        }
      });
      
    } else if (patient) {
      bcrypt.compare(password, patient.password, (err, data) => {
        if (err) throw err;
        if (data) {
          return res
            .status(201)
            .json(patient);
        } else {
          return res.status(402).json({ message: "invalid pass " });
        }
      });
    }
      else {
        return res.status(401).json("invalid email " );
      }
  }
  catch (err) {
    console.log("error");
  }
});

//UPDATE USER
router.put("/api/user/:id", async(req, res) => {
  if (req.body.userId == req.params.id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      catch (err) {
        return res.status(500).json(err);
      }
      
    }
    try {
      const doctor = await Doctor.findByIdAndUpdate(req.params.id, {
        $set:req.body,
      })
      res.status(200).json("Account has been updated");
    }
    catch (err) {
      
    }
  }
  else {
    res.status(401).json("You can only update your account!")
  }
})


//GET USER
router.get("/api/user/:id", async (req, res) => { 
  try {
    const doctor = await Doctor.findById(req.params.id);
    const patient = await Patient.findById(req.params.id);
    if (doctor || patient) {
      res.status(200).json(doctor || patient);
    }
   }
  catch (err) {
      console.log(err);
    }
})



router.get("/users", async (req, res) => {
  const userId = req.query.userId;
  const userType = req.query.userType;
  if (userType === "Patient") {
    try {

      const doctor = await Doctor.findById(userId);
      
      const { password, updatedAt, ...other } = doctor._doc;
      res.status(200).json(other);
    }
    catch (err) {
      res.status(500).json(err);
    }
  }
  else {
        try {
          const patient = await Patient.findById(userId);
          const { password, updatedAt, ...other } = patient._doc;
          res.status(200).json(other);
        } catch (err) {
          res.status(500).json(err);
        }
    
  }
});


//GET ALL DOCTOR





// FEEDBACK 
router.post("/compose", async (req, res) => {
  const { title, content } = req.body;
  const feedback = new Feedback({ title, content });
  feedback.save();
  res.status(201).json({ message: "Feedback registered successfully" });
});



module.exports = router;

router.post("/payment", async (req,res) => {
  const incoming_data = req.body;
  console.log(incoming_data);
  res.send(incoming_data);
});