const db = require("../data/dbConfig");

module.exports = {
  add,
  findList,
  findUsers,
  findUserById,
  findUserWithKitchen,
  findUserBy
};
async function findList(user_id){
  const itemList = await db("items as i").where({"i.user_id":user_id})
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

async function add(user) {
    return db("users").insert(user).then(ids=> {
        return findUserWithKitchen(ids[0])
    })
}

async function findUsers() {
  const users = await db("users")
  .select("id", "username", "email");
  if (users) {
      return users
  } else {
      return null
  }
}

async function findUserBy(filter) {
    console.log("FILTER", filter)
    const user = await db("users")
    .where(filter)
    .first()
    return user
}

async function findUserById(id) {
  const user = await db("users")
    .where({ "users.id": id })
    .first()
    // .join("kitchens as k", "k.id", "u.kit_id")
    // .select("u.id", "u.username", "u.email");
    return user
}

async function findUserWithKitchen(id) {
  const user = await db("users as u")
    .where({ "u.id": id })
    .first()
    .join("kitchens as k", "k.id", "u.kit_id")
    .select("u.id", "u.username", "u.email");

  const kitchen = await db("users as u")
    .where({ "u.id": id })
    .first()
    .join("kitchens as k", "k.id", "u.kit_id")
    .select("k.kit_name as Name", "k.city as Location", "k.website as Website");

  if (user && kitchen) {
    return { ...user, kitchen };
  } else {
    return null;
  }
}
