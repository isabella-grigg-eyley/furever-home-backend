
exports.seed = function(knex, Promise) {
    return knex('CosmeticsAndAnimals').del()
      .then(function () {
        return knex('CosmeticsAndAnimals').insert([
          {animalId: '1', cosmeticId: '1' },
          {animalId: '1', cosmeticId: '1' },
          {animalId: '1', cosmeticId: '1' }
        ]);
      });
  };
  