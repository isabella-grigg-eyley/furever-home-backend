
exports.seed = function(knex, Promise) {
 
  return knex('Users').del()
    .then(function () {
    
      return knex('Users').insert([
        {id: 1, username: '123', password: '123', email: '123@123.com', coins: '100'}
      ]);
    });
};
