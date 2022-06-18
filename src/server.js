const logEvents = require('./logEvents');

const EventEmitter = require('events');

class OurEmitter extends EventEmitter {};

const myEmitter = new OurEmitter();
myEmitter.on('log', (msg)=> logEvents(msg));

setTimeout(()=>{
    myEmitter.emit('log', 'Hello World!')
})