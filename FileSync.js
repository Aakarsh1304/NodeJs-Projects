const fs =require("fs"); 

const path =require("path");

// Asynchronous file operations
const filename="Async.txt"
const filepath = path.join(__dirname, filename);

// fs.writeFile(filepath, "This is async content", "utf-8",(err)=>{
// if(err) console.error("Error writing file:", err);
// else console.log("File written successfully");
// // })
// fs.readFile(filepath,(err,data)=>{
// if(err) console.error("Error writing file:", err);
// else console.log(data);
// })
// console.log("File read operation initiated");

fs.unlink(filepath,(err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File deleted successfully");
  }
}   
);