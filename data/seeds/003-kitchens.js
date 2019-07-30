
exports.seed = function(knex) {
  return knex('kitchens').delete()
    .then(function () {
      return knex('kitchens').insert([
        {kit_name: "Saint Antony's", city: "San Francisco", website: "https://www.stanthonysf.org/"},
        {kit_name: "GLIDE", city: "San Francisco", website: "https://www.glide.org/"},
        {kit_name: "Mother Brown's Kitchen", city: "San Francisco", website: ""},
        {kit_name: "Martin de Porres House of Hospitality", city: "San Francisco", website: "http://www.martindeporres.org/"},
        {kit_name: "Curry Senior Center", city: "San Francisco", website: "https://curryseniorcenter.org/"},
        {kit_name: "Rescue Mission", city: "San Francisco", website: "https://www.sfcityimpact.com/rescue-mission/"}
      ]);
    });
};
