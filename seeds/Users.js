
exports.seed = function (knex, Promise) {

  return knex('Users').del()
    .then(function () {

      return knex('Users').insert([
        { id: 1, username: 'harri-san', password: '111', email: '123@123.com', coins: '100', logoutTime: "1538001217263" },
        { id: 2, username: 'brucegoose', password: '222', email: '456@456.com', coins: '1000', logoutTime: "1538001217245" },
        { id: 2, username: 'badboy69', password: '333', email: '789@789.com', coins: '1000', logoutTime: "1538001217245" }
      ]);
    });
};
