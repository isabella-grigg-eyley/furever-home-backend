
exports.seed = function(knex, Promise) {
   
    return knex('AnimalsAndUsers').del()
      .then(function () {
      
        return knex('AnimalsAndUsers').insert([
          {animalId: 1, userId: 1},
          {animalId: 2, userId: 2}
        ]);
      });
  };
  