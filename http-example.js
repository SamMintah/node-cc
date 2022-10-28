const http = require("http");

// the request function : which takes a string as a first argument and the second argument
//  will be a call-back that accepts response-object as an argument when called. 
 
http.request("www.google.com" ,(res)=>{
    res.on("data", (chunk)=>{
        console.log(`Data chunk : ${chunk}`);
    });
    res.on('end' ,()=>{
        console.log('No more data');
    });
});