const express = require("express");

const Units = require("./unitsModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const units = await Units.find();
    if (units) {
      res.status(200).json(units)
    } else {
      res.status(404).json({message: "Units not found"})
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
