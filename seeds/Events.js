
exports.seed = function(knex, Promise) {
    return knex('Events').del()
      .then(function () {
        return knex('Events').insert([
          {id: 1, organisation: 'SPCA', headline: 'Cupcake drive to put drunk bunnies through rehab', content: 'lkjlahkglahg aerhto akjalgdfkgj alerit lh', image: '', location: 'Aro Park', dateAndTime: 'Sunday 2pm'},
        ]);
      });
  };
  