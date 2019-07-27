exports.seed = function(knex) {
  return knex('units').truncate()
    .then(function () {
      return knex('units').insert([
        {unit_name: "pounds", },
        {unit_name: "ounces", },
        {unit_name: "packages", },
        {unit_name: "cans", },
        {unit_name: "cups", },
        {unit_name: "pints", },
        {unit_name: "gallons", },
        {unit_name: "quarts", },
        {unit_name: "bags", },
        {unit_name: "jars", },
        {unit_name: "bunches", },
        {unit_name: "grams", },
        {unit_name: "boxes", }
      ]);
    });
};
