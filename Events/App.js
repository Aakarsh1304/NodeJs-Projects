const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.on("greet",()=>{
//     console.log("Hello World AAkarsh");
    
// })
// emitter.emit("greet");
// emitter.on("greet",(user)=>{
//     console.log(`HELLO ${user}`);
    
// })
// emitter.emit("greet","AAKARSH");
emitter.on("greet",(user)=>{
    console.log(`HELLO ${user.name}, your profession is ${user.prof}`);
    
})
emitter.emit("greet",{name:"Aakarsh",prof:"Software Engineer"});