var events = require("events");
var eventEmitter = new events.EventEmitter();
var listener1 = function (){
    console.log("listener 1 excuted")
}

eventEmitter.addListener("connection",listener1)
eventEmitter.emit("listener1");
