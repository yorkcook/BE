exports.up = function(knex) {
  return knex.schema
    .createTable("categories", tbl => {
      tbl.increments();
      tbl
        .string("cat_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("units", tbl => {
      tbl.increments();
      tbl
        .string("unit_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("kitchens", tbl => {
      tbl.increments();
      tbl
        .string("kit_name", 128)
        .notNullable()
        .unique();
      tbl.string("city", 128).notNullable();
      tbl.string("website", 128).unique();
      tbl.string("mission");
    })
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl
        .string("email", 128)
        .notNullable()
        .unique();
      tbl.string("password").notNullable();
      tbl
        .integer("kit_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("kitchens")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("items", tbl => {
      tbl.increments();
      tbl
        .string("item_name")
        .notNullable()
        .unique();
      tbl.float("quantity").notNullable();
      tbl.integer("price").notNullable();
      tbl.integer("alert_when");
      tbl
        .integer("kit_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("kitchens")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("unit_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("units")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("cat_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categories")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("items")
    .dropTableIfExists("users")
    .dropTableIfExists("kitchens")
    .dropTableIfExists("units")
    .dropTableIfExists("categories");
};
