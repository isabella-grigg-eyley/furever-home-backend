
exports.seed = function (knex, Promise) {

  return knex('Animals').del()
    .then(function () {

      return knex('Animals').insert([
        { id: 1, name: 'Chippy', species: 'dog', disposition: 'sassy' },
        { id: 2, name: 'Twinkie', species: 'dog', disposition: 'happy' },
        { id: 3, name: 'Donut', species: 'cat', disposition: 'grumpy' },
        { id: 4, name: 'Carlos', species: 'rabbit', disposition: 'sleepy' },
      ]);
    });
};
