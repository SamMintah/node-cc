// in our response, we'll need a fucntion which reads in the response and returns the data that we got back
// which of course need to be decrypted .


// function for decrypting the data
function decrypt (data){
    return 'decrypted data'
}

// funtion for reading the data
function read(){
    return decrypt("data");
}

module.exports= {
    read,
}
// notice that we only exported the send function because how the data is decrypted
// is only relevant within  this module .
// we only care about the public interface of the module that we're using which is the read().