// in our response, we'll need a fucntion which reads in the response and returns the data that we grt back
// which of course need to be decrypted .

function decrypt (data){
    return 'decrypted data'
}


function read(){
    return decrypt("data");
}

module.exports= {
    read,
}