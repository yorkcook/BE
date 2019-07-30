exports.seed = function(knex) {
  return knex("categories")
    .delete()
    .then(function() {
      return knex("categories").insert([
        { cat_name: "produce" },
        { cat_name: "dairy" },
        { cat_name: "meat&poultry" },
        { cat_name: "herbs&spices" },
        { cat_name: "frozen" },
        { cat_name: "beverage" },
        { cat_name: "dry" },
        { cat_name: "canned&jarred" },
        { cat_name: "other" }
      ]);
    });
};
