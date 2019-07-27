const express = require("express");

const Users = require("./usersModel");
const router = express.Router();

router.get("/:id/inventory", async (req, res) => {
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

module.exports = router;
