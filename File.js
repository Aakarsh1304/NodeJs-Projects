const fs= require("fs");
const os= require("os")
console.log(os.cpus().length);
//Synchronous
// fs.writeFileSync('./test.text','Hey There')
//Asynchronous
// fs.writeFile('./test.txt','Hey Asynchronous',(err)=>{});


// Synchronous

// const result=fs.readFileSync('./Contact.txt',"utf-8");
// console.log(result)
// console.log("1")
// // Asynchronous
// fs.readFile('Contact.txt',"utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(result)
//     }
// })

// console.log('2')
// console.log("7")
// Synchronous
// fs.appendFileSync('test.txt',`\n How r u?`)

