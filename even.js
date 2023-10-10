var events = require('events');
var eventEmitter = new events.EventEmitter();
var listener1 = function (){
    console.log("listener 1 excuted");
}

eventEmitter.on("connection",listener1);
eventEmitter.emit("connection");

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');