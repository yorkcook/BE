const express = require("express");

const { authenticate } = require("./authenticate");
const Users = require("./usersModel");
const router = express.Router();

router.get("/:id/inventory", authenticate, async (req, res) => {
  const { id } = req.params;
  try {
    const itemList = await Users.findList(id);
    if (itemList) {
      res.status(200).json(itemList);
    } else {
      res.status(404).json({ message: "Inventory list not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.update(id, req.body);
    if (user) {
      res.status(200).json({ message: "Update successful" });
    } else {
      console.log(user);
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", authenticate, async (req, res) => {
  try {
    const deleted = await Users.remove(req.params.id);
    console.log(deleted);
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "User not found to delete" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
