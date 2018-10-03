
exports.seed = function (knex, Promise) {

  return knex('Animals').del()
    .then(function () {

      return knex('Animals').insert([
        { id: 1, name: 'Chippy', species: 'dog', disposition: 'sassy' },
        { id: 2, name: 'Donut', species: 'cat', disposition: 'grumpy' },
        { id: 3, name: 'Star', species: 'dog', disposition: 'regal' },
        { id: 4, name: 'Twinkie', species: 'dog', disposition: 'happy' },
        { id: 5, name: 'Carlos', species: 'rabbit', disposition: 'sleepy' },
      ]);
    });
};
