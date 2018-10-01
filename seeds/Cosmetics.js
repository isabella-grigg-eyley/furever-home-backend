
exports.seed = function(knex, Promise) {
    return knex('Cosmetics').del()
      .then(function () {
        return knex('Cosmetics').insert([
          {id: '1', name: 'Bowler Hat', image: '', price: '100'},
          {id: '2', name: 'Glasses', image: '', price: '200'},
          {id: '3', name: 'Crown', image: '', price: '500'},
          {id: '4', name: 'Tie', image: '', price: '300'},
          {id: '5', name: 'Moustache', image: '', price: '700'}
        ]);
      });
  };
  