const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUserByID,
  getAnimalsByUserId,
  getInventoryByUserId,
  getCharitiesByUserId,
  postCharitiesToUserId,
  postInventoryToUserId,
  postAnimalsToUserId
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
          .select(['animalId', 'name','species', 'disposition'])
          .where('userId', id)
}

function getInventoryByUserId(id, testConn){
  const conn = testConn || connection
  return conn('Cosmetics')
    .join('CosmeticsAndUsers', 'Cosmetics.id', 'CosmeticsAndUsers.cosmeticId')
    .select()
    .where('userId', id)
}

function postInventoryToUserId(data, testConn){
  const conn = testConn || connection
  return conn ('CosmeticsAndUsers')
  .insert(data)
}

function getCharitiesByUserId(id, testConn){
  const conn = testConn || connection
  return conn('Charities')
    .join('CharitiesAndUsers', 'Charities.id', 'CharitiesAndUsers.charityId')
    .select([ 'charityId','charityName','mission', 'websiteURL', 'logo', 'donationPercent'])
    .where('userId', id)
}

function postCharitiesToUserId(data, testConn){
  const conn = testConn || connection
  return conn('CharitiesAndUsers')
    .insert(data)
}
function postAnimalsToUserId(data, testConn){
  const conn = testConn || connection
  return conn('AnimalsAndUsers')
    .insert(data)
}

// function addCosmetics (data, testConn) {
//   const conn = testConn || connection
//   data.
// }