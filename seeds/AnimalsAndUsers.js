
exports.seed = function (knex, Promise) {

  return knex('AnimalsAndUsers').del()
    .then(function () {

      return knex('AnimalsAndUsers').insert([
        { id: 1, animalId: 1, userId: 1 },
        { id: 2, animalId: 2, userId: 2 },
        { id: 3, animalId: 3, userId: 1 },
      ]);
    });
};

