const express = require("express");
const router = express.Router();
const Doctor = require("../Schema/DoctorSchema");

//GET ALL DOCTOR

router.get("/:speciality", async (req, res) => {
    try {
      const speciality = req.params.speciality;
    Doctor.find({speciality}, (err, users) => {
      if (err) {
        res.status(500).json(err);
        next();
      }
      res.json(users);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
