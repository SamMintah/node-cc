//  the key for a request is a function that allows us to send it  
 
// this function encrypt our data
function encrypt(data) {
    return "encrypted data"
}

//our send function takes the data and encrypt it and send the encrypted version to our url 
function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url} `)
}

module.exports = {
  send,
}