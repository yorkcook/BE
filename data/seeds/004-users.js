exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .delete()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "user1",
          email: "email1@email.com",
          password: "$2a$08$LpQDsY5r2rqHCMCApygX0..Pf2a6JQFpgjs0fGqHUyDOUKCznqSpG",
          kit_id: 1
        },
        {
          username: "user2",
          email: "email2@email.com",
          password: "$2a$08$LpQDsY5r2rqHCMCApygX0..Pf2a6JQFpgjs0fGqHUyDOUKCznqSpG",
          kit_id: 2
        },
        {
          username: "user3",
          email: "email3@email.com",
          password: "$2a$08$LpQDsY5r2rqHCMCApygX0..Pf2a6JQFpgjs0fGqHUyDOUKCznqSpG",
          kit_id: 3
        }
      ]);
    });
};
