const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticate } = require("../users&auth/authenticate");

const Inv = require("./inventoryModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const fullInventory = await Inv.findAll();
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

router.post("/", async (req, res) => {
  const item = req.body;
  item.user_id = req.user.id
  items.kit_id = req.kit_id
  try {
    const added = await Inv.add(item);
    console.log("item", item)
    if (added) {
      res.status(201).json({message: "Item added"});
    } else {
      res.status(400).json({ message: "Invalid item not added" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleItem = await Inv.findById(id);
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

router.put("/:id", authenticate, async (req, res) => {
  const item = req.body
  console.log(req.decoded)
  const userId = req.decoded.sub
  const kitId = req.decoded.kitchen
  try {
    const upItem = await Inv.update(req.params.id, userId, kitId, item);
    if (upItem) {
      res.status(200).json({ message: "Update successful" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Inv.remove(req.params.id);
    if (deleted) {
      res.status(204).json({message: "Item deleted"})
    } else {
      res.status(404).json({ message: "Item not found to delete" });
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
    console.log(err)
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
