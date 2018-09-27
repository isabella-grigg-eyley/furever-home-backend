
exports.seed = function(knex, Promise) {
   
    return knex('Charities').del()
      .then(function () {
        return knex('Charities').insert([
          {id: 1, charityName: 'SPCA', mission: 'The SPCA helps protect over 45,000 animals in New Zealand every year. Animals who are sick, injured, abused or simply abandoned', websiteURL: 'https://www.spca.nz/', logo: 'https://www.spca.nz/images/logo.svg?v=1'}
        ]);
      });
  };
  