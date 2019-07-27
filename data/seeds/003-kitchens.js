
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kitchens').del()
    .then(function () {
      // Inserts seed entries
      return knex('kitchens').insert([
        {kit_name: "Saint Antony's", city: "San Francisco", website: "https://www.stanthonysf.org/", mission: "St. Anthony’s mission is to feed, heal, shelter, clothe, lift the spirits of those in need, and create a society in which all persons flourish. This mission is guided by five values: healing, community, personalism, justice, and gratitude."},
        {kit_name: "GLIDE", city: "San Francisco", website: "https://www.glide.org/", mission: "GLIDE's mission is to create a radically inclusive, just and loving community mobilized to alleviate suffering and break the cycles of poverty and marginalization. Our Core Values emerge from GLIDE as a spiritual movement. They are rooted in empowerment, recovery and personal transformation. Our values inspire and guide our behaviors. They are the ground we stand on. "},
        {kit_name: "Mother Brown's Kitchen", city: "San Francisco", website: "", mission: ""},
        {kit_name: "Martin de Porres House of Hospitality", city: "San Francisco", website: "http://www.martindeporres.org/", mission: "Our mission is to serve in the spirit of compassion, understanding and love."},
        {kit_name: "Curry Senior Center", city: "San Francisco", website: "https://curryseniorcenter.org/", mission: "Our dining room is more than just meals served, it’s where people gather to connect, share and learn."},
        {kit_name: "Rescue Mission", city: "San Francisco", website: "https://www.sfcityimpact.com/rescue-mission/", mission: "The Rescue Mission is a space where anyone can walk in, sit-down, be encouraged, receive a hot meal and have people available to listen, and connect them to greater resources."}
      ]);
    });
};
