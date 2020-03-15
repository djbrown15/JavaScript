const EventEmitter = require('events');
const emitter = new EventEmitter();


var url = 'http://logger.io./log';

function print(message){
    // send an http request
    console.log(message);

    // raise an event
    emitter.emit('Junior', { Buidling: 'Block C', Dept: 'Business Automation' });
}

module.exports.print = print;

