
exports.seed = function (knex, Promise) {
  return knex('Events').del()
    .then(function () {
      return knex('Events').insert([
        { id: 1, organisation: 'SPCA', headline: 'Boosting workplace wellness with Pets at Work', content: 'Organisations looking to reap the benefits of a higher performing and more motivated workforce are being encouraged to take the pledge to bring their pets to work on ‘Pets at Work Day’', image: '/images/events/petsatwork.jpg', location: 'Your Workplace', dateAndTime: 'this week' },
        { id: 2, organisation: 'Animal Welfare Society', headline: 'Cupcake drive to put drunk bunnies through rehab', content: 'The bunnies have been going through a rough time and now is a chance to help out, we are aiming to raise $500 to put Carlos and Pablo through an intensive rehabilitation programme', image: '/images/events/rehabbunny.jpg', location: 'Aro Park', dateAndTime: 'Sunday 2pm' },
        { id: 3, organisation: 'HUHA', headline: 'Puppy Walk along the Parade', content: 'Let\'s get these wee pooches out and running around outside for a good tucker out', image: '/images/events/puppywalk.jpg', location: 'Oriental Parade', dateAndTime: 'Saturday 3pm' },
        { id: 4, organisation: 'The Kitten Inn', headline: 'Time Capsule for Mittens', content: 'Mittens has got to cat-dom and \'no gusta\', we are raising funds with a dance-a-thon to go towards building a time-travel capsule', image: '/images/events/oldcat.jpg', location: '', dateAndTime: '16 November' },
        { id: 5, organisation: 'Pet Rescue', headline: 'Appreciation Day', content: 'We want to thank all our lovely volunteers for their hard work throughout the year. We will be putting on a BBQ with drinks, bring a plate to add to the feast, bring yourself to brighten our day', image: '/images/events/appreciationday.jpg', location: 'Arras Park', dateAndTime: 'Sunday 11pm to 4pm' },
      ]);
    });
};
