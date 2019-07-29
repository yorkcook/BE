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
      res.status(400).json({ message: "Item not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/kitchen/:id", async (req, res) => {
  const kit_id = req.params.id;
  try {
    const invList = await Inv.findListByKitchen(kit_id);
    if (invList) {
      res.status(200).json(invList);
    } else {
      res.status(400).json({ message: "Inventory list not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/user/:id", async (req, res) => {
  const kit_id = req.params.id;
  try {
    const invList = await Inv.findListByUser(kit_id);
    if (invList) {
      res.status(200).json(invList);
    } else {
      res.status(400).json({ message: "Inventory list not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  const item = req.body;
  try {
    const added = await Inv.add(item);
    if (added) {
      res.status(201).json(added);
    } else {
      res.status(400).json({ message: "Invalid item not added" });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
