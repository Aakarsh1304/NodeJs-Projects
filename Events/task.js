const EventEmitter =require("events")
const emitter = new EventEmitter();
const count ={
    "Login":0,
    "Logout":0,
    "Purchase":0,
    "Update":0
}
emitter.on("Login",(data)=>{
   count.Login++; 
console.log(`User ${data.user} has logged in with status: ${data.status}`);
})

emitter.on("Logout",(data)=>{
     count.Logout++; 
console.log(`User ${data.user} has logged out in with status: ${data.status}`);
})
emitter.on("Purchase",(data)=>{
     count.Purchase++; 
console.log(`User ${data.user} has logged in with status: ${data.status}`);
})
emitter.on("Update",(data)=>{
     count.Update++; 
console.log(`User changed their name to ${data.user}  with status: ${data.status}`);
})
emitter.on("summary",()=>{
console.log(count);
})
emitter.emit("Login",{user:"Mohan",status:"Success"})
emitter.emit("Logout",{user:"Mohan",status:"Success"})
emitter.emit("Purchase ",{user:"Mohan",status:"Success"})
emitter.emit("Update",{user:"Ramu",status:"Success"})
emitter.emit("summary")
