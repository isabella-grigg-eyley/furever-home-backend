
exports.seed = function(knex, Promise) {
    return knex('CosmeticsAndUsers').del()
      .then(function () {
        return knex('CosmeticsAndUsers').insert([
          {userId: '1', cosmeticId: '1' }
        ]);
      });
  };
  