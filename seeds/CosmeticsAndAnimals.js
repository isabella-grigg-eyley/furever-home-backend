
exports.seed = function(knex, Promise) {
    return knex('CosmeticsAndAnimals').del()
      .then(function () {
        return knex('CosmeticsAndAnimals').insert([
          {id: 1, animalId: '1', cosmeticId: '1' },
          {id: 2, animalId: '2', cosmeticId: '2' },
          {id: 3, animalId: '3', cosmeticId: '1' }
        ]);
      });
  };
  