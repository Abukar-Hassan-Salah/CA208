var events = require("events");
var eventEmitter = new events.EventEmitter();
var listener1 = function listener1(){
    console.log("listener 1 excuted")
}
eventEmitter.emit("connection");
