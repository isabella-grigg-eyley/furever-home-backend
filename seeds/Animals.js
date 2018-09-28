
exports.seed = function (knex, Promise) {

  return knex('Animals').del()
    .then(function () {

      return knex('Animals').insert([
        { id: 1, name: 'Twinkie', species: 'dog', disposition: 'happy' },
        { id: 2, name: 'Donut', species: 'cat', disposition: 'grumpy' },
        { id: 3, name: 'Carlos', species: 'rabbit', disposition: 'sleepy' }
      ]);
    });
};
