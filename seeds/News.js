
exports.seed = function(knex, Promise) {
    return knex('News').del()
      .then(function () {
        return knex('News').insert([
          {id: 1, organisation: 'SPCA', headline: 'Grumpy Cat would like to be known as Crabby Cat ', content: 'lkjlahkglahg aerhto akjalgdfkgj alerit lh', image: 'https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg'},
        ]);
      });
  };
  