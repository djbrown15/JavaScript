    console.log(__filename);
    console.log(__dirname)

var url = 'http://logger.io./log';

function print(message){
    // send an http request
    console.log(message);
}

module.exports.print = print;

