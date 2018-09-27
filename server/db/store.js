const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    //getStore,
    sayHi
}
function sayHi(){
    return "hi"
}

// function getStore(testConn){
//     let store = {}
//     const conn = testConn || connection
//    return conn('Cosmetics')
//    .select()
//    .then(cos => {
//        store.cosmetics = cos
//     conn('Animals')
// .select()
// .then(anim => {
//     store.animals = anim

// })
// return Promise.all(store).then(() =>{
//     return store
// })
//     }

// function getStore(testConn){
 
//     let storeObj = {}
//     const conn = testConn || connection
//     conn('Cosmetics')
//     .select()
//     .then( cos => {
//         console.log(cos, 'cosmetics')
        
//         storeObj.cosmetics = cos
//         console.log(cos, 'cos obj')
//         conn('Animals')
//         .select()
//         .then( anim => {
//             console.log(anim, 'what anim')
//             storeObj.animals = anim
//             console.log(storeObj, 'this is it')
//             return new Promise(function(resolve, reject){return storeObj})
//         })
//     })}

