const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUserByID,
  getAnimalsByUserId,
  getInventoryByUserId,
  getCharitiesByUserId,
  postCharitiesToUserId
}

function getUsers(testConn) {
  const conn = testConn || connection
  return conn('Users').select()
}

function getUserByID(id, testConn) {
  const conn = testConn || connection
  return conn('Users')
    .where('id', id)
    .first()
    .catch(err => {});
}

function getAnimalsByUserId(id, testConn){
  const conn = testConn || connection
  return conn('Animals')
          .join('AnimalsAndUsers', 'Animals.id', 'AnimalsAndUsers.animalId')
          .select()
          .where('userId', id)
}

function getInventoryByUserId(id, testConn){
  const conn = testConn || connection
  return conn('Cosmetics')
    .join('CosmeticsAndUsers', 'Cosmetics.id', 'CosmeticsAndUsers.cosmeticId')
    .select()
    .where('userId', id)
}

function getCharitiesByUserId(id, testConn){
  const conn = testConn || connection
  return conn('Charities')
    .join('CharitiesAndUsers', 'Charities.id', 'CharitiesAndUsers.charityId')
    .select()
    .where('userId', id)
}

function postCharitiesToUserId(data, testConn){
  const conn = testConn || connection
  return conn('CharitiesAndUsers')
    .insert(data)
}

// function addCosmetics (data, testConn) {
//   const conn = testConn || connection
//   data.
// }