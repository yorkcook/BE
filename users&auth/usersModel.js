const db = require("../data/dbConfig");

module.exports = {
  add,
  remove,
  update,
  findUsers,
  findList,
  findUserById,
  findUserWithKitchen,
  findUserBy
};

async function add(user) {
  try{

   const added= await db("users")
    .insert(user)
    // .then(async (ids)=> {
    //  const user = await findUserWithKitchen(ids[0]);
    //  return user
    // });
    if(added) {
      return true
    } else {
      return false
    }
  } catch(err){
    console.log(err)
  }
}

async function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
}

async function remove(id) {
  return db("users").where({id}).del()
}

async function findList(user_id) {
  const itemList = await db("items as i")
    .where({ "i.user_id": user_id })
    .join("categories as c", "c.id", "i.cat_id")
    .join("units as u", "u.id", "i.unit_id")
    .join("kitchens as k", "k.id", "i.kit_id")
    .select(
      "i.item_name as item_name",
      "i.quantity as quantity",
      "u.unit_name as unit_name",
      "c.cat_name as cat_name"
    );
  if (itemList) {
    return itemList;
  } else {
    return null;
  }
}



async function findUsers() {
  const users = await db("users").select("id", "username", "email");
  if (users) {
    return users;
  } else {
    return null;
  }
}

async function findUserBy(filter) {
  console.log("FILTER", filter);
  const user = await db("users")
    .where(filter)
    .first();
  return user;
}

async function findUserById(id) {
  const user = await db('users as u')
    .where({ "u.id": id }).first()
    .join("kitchens as k", 'k.id', 'u.kit_id')
    .select("u.id", "u.username", "u.email");
  return user;
}

async function findUserWithKitchen(user_id) {
  const user = await db("users")
    .where({ "users.id": user_id })
    // .first()
    .join("kitchens", "kitchens.id", "users.kit_id")
    .select("id", "username", "email");

  const kitchen = await db('users')
    .where({ 'users.id': user_id })
    // .first()
    .join('kitchens', 'kitchens.id', 'users.kit_id')
    .select('kit_name', 'city', 'website');
    // .select("kitchens.kit_name as kit_name", "kitchens.city as city", "kitchens.website as website");

  if (user && kitchen) {
    return { ...user, kitchen };
  } else {
    return null;
  }
}
