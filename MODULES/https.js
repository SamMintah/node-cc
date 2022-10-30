const { send , read} = require ('./internals')

// const { send } = require ("./request")
// const { read } = require ("./response")

// this function allows you to make a request against some server
// to send it some data.
// the function takes in URL for the destination that we'r making the request against  as well as some data to send to that destination.


function makeRequest (url ,data){
    send(url,data);
    return read();
}

const responseData = makeRequest('https://google.com' , 'hello');
console.log(responseData); 

//node maintains a cache of required modules, which is basically a lil database of these modules that node checks if those modules were previously loaded.
//  and if it already was loaded,it doesnt load it again .it just look for the modules in the cache

// this cache is global and it leaves in the require.cache object
console.log(require.cache)