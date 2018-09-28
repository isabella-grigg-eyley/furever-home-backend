
exports.seed = function (knex, Promise) {
  return knex('Events').del()
    .then(function () {
      return knex('Events').insert([
        { id: 1, organisation: 'Animal Welfare Society', headline: 'Cupcake drive to put drunk bunnies through rehab', content: 'lkjlahkglahg aerhto akjalgdfkgj alerit lh', image: '', location: 'Aro Park', dateAndTime: 'Sunday 2pm' },
        { id: 2, organisation: 'SPCA', headline: 'Boosting workplace wellness with Pets at Work', content: 'Organisations looking to reap the benefits of a higher performing and more motivated workforce are being encouraged to take the pledge to bring their pets to work on ‘Pets at Work Day’', image: 'https://www.spca.nz/Images/Assets/38734/13/', location: 'Your Workplace', dateAndTime: 'this week' }
      ]);
    });
};
