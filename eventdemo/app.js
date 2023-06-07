var event = require("events").EventEmitter
var emitter = new event.EventEmitter();
var listener1 = function listener1(data,time){
    console.log("this event  at listener1",data,time)
}
emitter.addListener("someEvent", listener1)
var listener2 = function listener2(data,time){
    console.log("this event  at listener2",data,time);
}
emitter.on("someEvent", listener2)
var emitterCount = emitter.listenerCount("someEvent")
console.log("监听了多少个回调" + emitterCount)
time = new Date()
data = "看我触发了什么"
emitter.emit("someEvent",data,time)
// emitter.removeListener("someEvent",listener1);
var emitterCount = emitter.listenerCount("someEvent")
console.log("监听了多少个回调" + emitterCount)
emitter.emit("someEvent",data,time)