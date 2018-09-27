
exports.seed = function(knex, Promise) {
  
  return knex('Animals').del()
    .then(function () {
    
      return knex('Animals').insert([
        {id: 1, name: 'twinkie', species: 'dog', disposition: 'happy'},
        {id: 2, name: 'donut', species: 'cat', disposition: 'grumpy'}
      ]);
    });
};
