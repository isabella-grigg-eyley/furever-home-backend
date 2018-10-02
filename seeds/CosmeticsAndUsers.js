
exports.seed = function (knex, Promise) {
  return knex('CosmeticsAndUsers').del()
    .then(function () {
      return knex('CosmeticsAndUsers').insert([
        { id: 1, userId: '1', cosmeticId: '1' },
        { id: 2, userId: '1', cosmeticId: '2' },
        { id: 3, userId: '1', cosmeticId: '3' },
        { id: 4, userId: '1', cosmeticId: '4' },
        { id: 5, userId: '1', cosmeticId: '5' },
      ]);
    });
};
