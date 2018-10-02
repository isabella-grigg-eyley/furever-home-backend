
exports.seed = function (knex, Promise) {
  return knex('Cosmetics').del()
    .then(function () {
      return knex('Cosmetics').insert([
        { id: '1', name: 'Bowler Hat', image: '/images/cosmetics/bowler-hat-512-png', price: '100' },
        { id: '2', name: 'Glasses', image: '/images/cosmetics/glasses-2-png', price: '200' },
        { id: '3', name: 'Crown', image: '/images/cosmetics/crown-2-512-png', price: '500' },
        { id: '4', name: 'Tie', image: '/images/cosmetics/tie-512-png', price: '300' },
        { id: '5', name: 'Moustache', image: '/images/cosmetics/mustache-2-png', price: '700' }
      ]);
    });
};
