
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "user1", email: "email@email.com", password: "1234", kit_id: 1},
        {username: "user2", email: "email@email.com", password: "1234", kit_id: 2},
        {username: "user3", email: "email@email.com", password: "1234", kit_id: 3}
      ]);
    });
};
