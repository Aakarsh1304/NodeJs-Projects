const fs = require("fs");
const filename = "tet.txt";
const path = require("path");
const filpath = path.join(__dirname, filename);

//Write file
// const writefile=fs.writeFileSync(filpath,"This is up  content","utf-8");

// console.log(writefile);

//Read file
// const readfile=fs.readFileSync(filpath,"utf-8");
// // console.log(readfile.toString());
// console.log(readfile);

// //Append file
// const appendfile=fs.appendFileSync(filpath,"\nThis is appended content","utf-8");
// console.log(appendfile);
//delete file
const deletefile = fs.unlinkSync(filpath);
console.log(deletefile);
