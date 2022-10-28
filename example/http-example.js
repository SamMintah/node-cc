// const http = require("https");
const {request , get} = require("https");

// the request function : which takes a string as a first argument and the second argument
//  will be a call-back that accepts response-object as an argument when called. 
 
const req = request("https://www.google.com" ,(res)=>{
    res.on("data", (chunk)=>{
        console.log(`Data chunk : ${chunk}`);
    });
    res.on('end' ,()=>{
        console.log('No more data');
    });
});
// we always need to bring the end function because it will cause the request to be sent 
req.end();


// the get function doesn't need the end function
get("https://www.google.com" ,(res)=>{
    res.on("data", (chunk)=>{
        console.log(`Data chunk : ${chunk}`);
    });
    res.on('end' ,()=>{
        console.log('No more data');
    });
});


