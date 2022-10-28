const request = require ("./request")
const response = require ("./response")
// this function allows you to make a request against some server
// to send it some data.
// the function takes in URL for the destination that we'r making the request against  as well as some data to send to that destination.


function makeRequest (url ,data){
    request.send(url,data)
    return response.read();
}

const responseData = makeRequest('https://google.com' , 'hello');
console.log(responseData);