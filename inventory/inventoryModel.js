const db = require("../data/dbConfig");

module.exports = {
  findAll,
  findById,
  findList
};

async function findList(user_id){
    const itemList = await db("items as i").where({"i.user_id":user_id}).first()
    .join("categories as c", "c.id", "i.cat_id")
    .join("units as u", "u.id", "i.unit_id")
    .join("kitchens as k", "k.id", "i.kit_id")
    .select(
      "i.item_name as Name",
      "i.quantity as Quantity",
      "u.unit_name as Unit",
      "c.cat_name as Category",
    );
  if (itemList) {
    return itemList;
  } else {
    return null;
  }
}

async function findAll() {
  const items = await db("items as i")
    .join("categories as c", "c.id", "i.cat_id")
    .join("units as u", "u.id", "i.unit_id")
    .join("kitchens as k", "k.id", "i.kit_id")
    .select(
      "i.item_name as Name",
      "i.quantity as Quantity",
      "u.unit_name as Unit",
      "i.price as Price",
      "i.alert_when as Alert",
      "c.cat_name as Category",
      "k.kit_name as Kitchen"
    );
  if (items) {
    return items;
  } else {
    return null;
  }
}

async function findById(item_id) {
    const items = await db("items as i").where({"i.id":item_id}).first()
    .join("categories as c", "c.id", "i.cat_id")
    .join("units as u", "u.id", "i.unit_id")
    .join("kitchens as k", "k.id", "i.kit_id")
    .select(
      "i.item_name as Name",
      "i.quantity as Quantity",
      "u.unit_name as Unit",
      "i.price as Price",
      "i.alert_when as Alert",
      "c.cat_name as Category",
      "k.kit_name as Kitchen"
    );
  if (items) {
    return items;
  } else {
    return null;
  }
}
