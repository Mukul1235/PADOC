const express = require("express");
const router = express.Router();
const Medicine = require("../Schema/MedicineSchema");

router.post("/", async (req, res) => {
    const { medicines, TimesAday, FromDate, TillDate } = req.body;
    const reciept = new Medicine({
        medicines, TimesAday, FromDate, TillDate
    });
    try {
    const savedConversation=await reciept.save();
        res.status(200).json(savedConversation);
    }
    catch (err) {
        console.log(err);
    }
})

// router.get("/", async (req, res) => {
//     res.status(200).json();
// })
module.exports = router;