
exports.seed = function(knex, Promise) {
    return knex('Cosmetics').del()
      .then(function () {
        return knex('Cosmetics').insert([
          {id: '1', name: 'tophat', image: 'https://www.villagehatshop.com/photos/product/standard/4511390S423245/all/abraham-lincoln-wool-felt-top-hat-made-to-order.jpg', price: '100'}
        ]);
      });
  };
  