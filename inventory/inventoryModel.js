const db = require("../data/dbConfig");

module.exports = {
  add,
  update,
  remove,
  findAll,
  findById,
  findListByKitchen,
};

async function findAll() {
  const items = await db("items as i")
    .join("categories as c", "c.id", "i.cat_id")
    .join("units as u", "u.id", "i.unit_id")
    .join("kitchens as k", "k.id", "i.kit_id")
  .join("users", "i.user_id", "users.id")
    .select(
      "i.id as id",
      "i.item_name as item_name",
      "i.quantity as quantity",
      "u.unit_name as unit",
      "i.price as price",
      "i.alert_when as alert_when",
      "c.cat_name as cat_namey",
      "k.kit_name as kit_name",
      "users.username as username"
    );
  if (items) {
    return items;
  } else {
    return null;
  }
}

async function findById(item_id) {
  const items = await db("items as i")
    .where({ "i.id": item_id })
    .first()
    .join("categories as c", "c.id", "i.cat_id")
    .join("units as u", "u.id", "i.unit_id")
    .join("kitchens as k", "k.id", "i.kit_id")
    .join("users", "i.user_id", "users.id")
    .select(
      "i.id as id",
      "i.item_name as item_name",
      "i.quantity as quantity",
      "u.unit_name as unit_name",
      "i.price as price",
      "i.alert_when as alert_when",
      "c.cat_name as cat_name",
      "k.kit_name as kit_name",
      "users.username as username"
    );
  if (items) {
    return items;
  } else {
    return null;
  }
}

async function findListByKitchen(kit_id) {
  const items = await db("items as i")
    .where({ "i.kit_id": kit_id })
    .join("units as u", "u.id", "i.unit_id")
    .join("categories as c", "c.id", "i.cat_id")
    .join("users", "i.user_id", "users.id")
    .select(
      "i.id as id",
      "item_name",
      "quantity",
      "unit_name",
      "price",
      "alert_when",
      "cat_name",
      "users.username as username"
    );
  if (items) {
    return items;
  } else {
    return null;
  }
}

async function add(item) {
  return db("items")
    .insert(item)
    .then(ids => {
      return findById(ids[0]);
    });
}

async function update(id, changes) {
  return db("items")
    .where({ id })
    .update(changes);
}

async function remove(id) {
  return db("items")
    .where({ id })
    .del();
}
