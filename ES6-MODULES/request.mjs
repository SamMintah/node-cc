//  the key for a request is a function that allows us to send it...
 
// this constant abort every request that doesnt complete within every 500ms..
const REQUEST_TIMEOUT = 500;

// this function encrypt our data
function encrypt(data) {
    return "encrypted data"
}

//the send function takes the data and encrypt it, and send the encrypted version to our url .
function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url} `)
}

export  {
  REQUEST_TIMEOUT,
  send,
}

// notice that we only exported the send function because how the data is encrypted
// is only relevant within  this module .
// we only care about the public interface of the module that we're using which is the send().