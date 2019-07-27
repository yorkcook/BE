const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Inv = require("./inventoryModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const fullInventory = await Inv.findAllInv();
    if (fullInventory) {
      res.status(200).json(fullInventory);
    } else {
      res.status(400).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleItem = await Inv.findInvById(id);
    if (singleItem) {
      res.status(200).json(singleItem);
    } else {
      res.status(400).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;
