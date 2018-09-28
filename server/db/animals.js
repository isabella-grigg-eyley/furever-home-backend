const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAnimals,
  getAnimalsById,
  getInventoryByAnimalId,
  deleteAnimalandInventory,
  postInventoryToAnimalId  
}

function getAnimals(testConn) {
  const conn = testConn || connection
  return conn('Animals').select()
}

function getAnimalsById(id, testConn) {
  const conn = testConn || connectionname
  return conn('Animals')
    .where('id', id)
    .first()
    .catch(err => {});
}

function getInventoryByAnimalId(id, testConn){
  const conn = testConn || connection
  return conn('Cosmetics')
  .join('CosmeticsAndAnimals', 'Cosmetics.id', 'CosmeticsAndAnimals.cosmeticId')
  .select([ 'cosmeticId','name','image', 'price'])
  .where('animalId', id)
  .first()
}

function deleteAnimalandInventory(id, testConn){
  const conn = testConn || connection
  return conn('CosmeticsAndAnimals')
  .where('animalId', id)
  .del()
}

function postInventoryToAnimalId(data, testConn){
  const conn = testConn || connection
  return conn ('CosmeticsAndAnimals')
  .insert(data)
}
