
exports.seed = function (knex, Promise) {
  return knex('CharitiesAndUsers').del()
    .then(function () {
      return knex('CharitiesAndUsers').insert([
        { userId: '1', charityId: '1', donationPercent: '100' },
      ]);
    });
};
