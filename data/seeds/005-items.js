exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("items")
    .delete()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          item_name: "popcorn",
          quantity: 10,
          unit_id: 3,
          price: 1000,
          alert_when: 0,
          kit_id: 1,
          cat_id: 7,
          user_id:1
        },
        {
          item_name: "black beans",
          quantity: 30,
          unit_id: 4,
          price: 1500,
          alert_when: 10,
          kit_id: 1,
          cat_id: 8,
          user_id:1
        },
        {
          item_name: "Apple Jax",
          quantity: 15,
          unit_id: 13,
          price: 350,
          alert_when: 3,
          kit_id: 1,
          cat_id: 7,
          user_id:1
        },
        {
          item_name: "Milk",
          quantity: 40,
          unit_id: 7,
          price: 599,
          alert_when: 5,
          kit_id: 1,
          cat_id: 2,
          user_id:1
        },
        {
          item_name: "half&half",
          quantity: 10,
          unit_id: 8,
          price: 499,
          alert_when: 2,
          kit_id: 1,
          cat_id: 2,
          user_id:1
        },
        {
          item_name: "rice",
          quantity: 50,
          unit_id: 1,
          price: 2000,
          alert_when: 5,
          kit_id: 1,
          cat_id: 7,
          user_id:1
        },
        {
          item_name: "apples",
          quantity: 10,
          unit_id: 1,
          price: 1000,
          alert_when: 2,
          kit_id: 1,
          cat_id: 1,
          user_id:1
        },
        {
          item_name: "pancake mix",
          quantity: 5,
          unit_id: 3,
          price: 1700,
          alert_when: 1,
          kit_id: 1,
          cat_id: 7,
          user_id:1
        },
        {
          item_name: "basil",
          quantity: 3,
          unit_id: 11,
          price: 500,
          alert_when: 1,
          kit_id: 1,
          cat_id: 4,
          user_id:1
        }
      ]);
    });
};
