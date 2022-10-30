import { send } from "./request.mjs"
import { read } from "./response.mjs"

// this function allows you to make a request against some server
// to send it some data.
// the function takes in URL for the destination that we'r making the request against  as well as some data to send to that destination.


function makeRequest (url ,data){
    send(url,data);
    return read();
}

const responseData = makeRequest('https://google.com' , 'hello');
console.log(responseData); 