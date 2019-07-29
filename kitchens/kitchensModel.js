const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  update
};

async function find() {
  const kitchens = await db("kitchens");
  if (kitchens) {
    return kitchens;
  } else {
    return null;
  }
}

async function findById(id) {
  const kitchen = await db("kitchens")
    .where({ id })
    .first();
  if (kitchen) {
    return kitchen;
  } else {
    return null;
  }
}

async function add(kitchen) {
  return db("kitchens")
    .insert(kitchen)
    .then(ids => {
      return findById(ids[0]);
    });
}

async function update(id, changes) {
  return db("kitchens")
    .where({ id })
    .update(changes);
}
