const fs=require("fs");
const path =require("path");    
const filename="Prom.txt";  
const filepath = path.join(__dirname, filename);
const file=__dirname
// fs.promises
// .readdir(file)
// .then((data)=>{console.log( data);})
// .catch((err) => {console.error(err);});

// fs.promises.writeFile(filepath, "This is a promise file", "utf-8")
// .then(() => {
//     console.log("File written successfully");
// }   )
// .catch((err) => {
//     console.error("Error writing file:", err);
// }   )


fs.promises.readFile(filepath,  "utf-8")
.then((data) => {
    console.log(data);
}   )
.catch((err) => {
    console.error("Error writing file:", err);
}   )

fs.promises.unlink(filepath)
.then(() => {
    console.log("Deleted successfully");
}   )
.catch((err) => {
    console.error("Error writing file:", err);
}   )