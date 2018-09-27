const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUserByID,
  getAnimalsbyUserId
  
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

// function getAnimalsbyUserId(userId, testConn) {
//   const conn = testConn || connection
//   return conn('AnimalsAndUsers')
//   .where('userId', userId)
//   .then(animaluser => {
//     let arr = [];
//     animaluser.forEach(animal => {
//       arr.push(conn('Animals').getUserByID(animal.userId))
//     })
//    return Promise.all(arr)
//   })
// }

function getAnimalsbyUserId(id, testConn){
  const conn = testConn || connection
  return conn('Animals')
          .join('AnimalsAndUsers', 'Animals.id', 'AnimalsAndUsers.animalId')
          .select()
          .where('userId', id)
}

// function getAnimalsbyUserId(userId, testConn) {
//   const conn = testConn || connection
//   return conn('AnimalsAndUsers')
//   .join(conn('Animals').getUserByID(Animal))
//   .then(console.log("we are here"))
//   .then(animaluser => {
//     let arr = [];
//     animaluser.forEach(element => {
//       arr.push(conn('Animals').getUserByID(Animal))
      
//     });
//   })
// }

