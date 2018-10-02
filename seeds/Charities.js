
exports.seed = function (knex, Promise) {

  return knex('Charities').del()
    .then(function () {
      return knex('Charities').insert([
        { id: 1, charityName: 'SPCA', mission: 'The SPCA helps protect over 45,000 animals in New Zealand every year. Animals who are sick, injured, abused or simply abandoned', websiteURL: 'https://www.spca.nz/', logo: '/images/charities/spca.png' },
        { id: 2, charityName: 'HUHA', mission: 'Helping you help animals (HUHA) is a charitable trust dedicated to teaching empathy to the community and providing shelter for those less fortunate animals that struggle to survive in today’s disposable culture.', websiteURL: 'https://huha.org.nz/', logo: '/images/charities/huha.jpg' },
        { id: 3, charityName: 'Wellington Cats Protection League', mission: 'To take in displaced or unwanted cats and rehome them where possible. To inform the public on the care of cats. To encourage the desexing of all cats not required for breeding', websiteURL: 'http://www.cpl-wellington.org.nz/', logo: '/images/charities/wcpl.png' },
        { id: 4, charityName: 'Pet Rescue', mission: 'Giving animals a second chance at life', websiteURL: 'http://www.petrescue.org.nz/', logo: '/images/charities/petrescue.png' },
        { id: 5, charityName: 'Upper Hutt Animal Rescue', mission: 'Upper Hutt Animal Rescue Society (UHARS) operates as a shelter that takes in homeless, stray and unwanted animals, providing them with a safe haven until they find a permanent home.', websiteURL: 'https://www.animalrescue.org.nz/', logo: '/images/charities/uhars.png' },
        { id: 6, charityName: 'The Kitten Inn', mission: 'We take in unwanted pregnant cats, and kittens from throughout the Wellington region. We also regularly run discounted desexing programs to encourage and help people to responsibly desex their cats.', websiteURL: 'http://kitteninn.org.nz/', logo: '/images/charities/kitteninn.png' }
      ]);
    });
};
