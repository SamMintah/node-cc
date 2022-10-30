// index.js is a special case in node .It allows you to treat a folder like a module
// so that when you pass the path to a folder to the require function,it resolves to the index.js file inside that folder

// const request = require ('./request')
// const response = require ('./response')

// manual export
// module.exports = {
//    REQUEST_TIMEOUT :request.REQUEST_TIMEOUT,
//    send : request.send,
//    read : response.read,
// }

// this spread operator takes all of the properties in our two modules and unpacks them 
// so that, the same properties with the same names exist on our new object .
module.exports = {
    ...require('./request'),
    ...require('./response'),

 }