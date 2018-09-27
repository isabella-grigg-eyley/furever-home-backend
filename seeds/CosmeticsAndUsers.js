
exports.seed = function(knex, Promise) {
    return knex('CosmeticsAndUsers').del()
      .then(function () {
        return knex('CosmeticsAndUsers').insert([
          {id: 1, userId: '1', cosmeticId: '2' },
          {id: 2, userId: '2', cosmeticId: '1' }
        ]);
      });
  };
  