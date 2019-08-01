const express = require("express");

const { authenticate } = require("../users&auth/authenticate");
const Kits = require("./kitchensModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const kitchens = await Kits.find();
    if (kitchens) {
      res.status(200).json(kitchens);
    } else {
      res.status(404).json({ message: "Kitchens not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const kitchen = await Kits.findById(req.params.id);
    if (kitchen) {
      res.status(200).json(kitchen);
    } else {
      res.status(404).json({ message: "Kitchen not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const added = await Kits.add(req.body);
    if (added) {
      res.status(201).json({message: "Kitchen added"});
    } else {
      res.status(400).json({ message: "Invalid kitchen not added" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {

  try {
    const kitchen = await Kits.update(req.params.id, req.body);
    if (kitchen) {
      res.status(200).json({ message: "Update successful" });
    } else {
      res.status(404).json({ message: "Kitchen not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router