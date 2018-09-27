const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAnimals,
  getAnimalsById,
  getInventoryByAnimalId
  
}

function getAnimals(testConn) {
  const conn = testConn || connection
  return conn('Animals').select()
}

function getAnimalsById(id, testConn) {
  const conn = testConn || connection
  return conn('Animals')
    .where('id', id)
    .first()
    .catch(err => {});
}

function getInventoryByAnimalId(id, testConn){
  const conn = testConn || connection
  return conn('Cosmetics')
  .join('CosmeticsAndAnimals', 'Cosmetics.id', 'CosmeticsAndAnimals.cosmeticId')
  .select()
  .where('animalId', id)
}