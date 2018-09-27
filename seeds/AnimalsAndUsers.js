
exports.seed = function(knex, Promise) {
   
    return knex('AnimalsAndUsers').del()
      .then(function () {
      
        return knex('AnimalsAndUsers').insert([
          {animalID: '1', userId: '1'},
          {animalID: '2', userId: '2'}
        ]);
      });
  };
  