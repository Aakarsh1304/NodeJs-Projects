const fs=require("fs");
const path =require("path");    
const filename="P.txt";  
const filepath = path.join(__dirname, filename);
const file=__dirname
// const ReafFolder = async () => {
//   try {
//     const data = await fs.promises.readdir(file);
//     console.log(data); 
//   } catch (err) {   
//     console.error(err);
//   } }
// ReafFolder();
// const WriteFile = async () => {
//   try {
//     await fs.promises.writeFile(filepath, "This is a promise file", "utf-8");
//     console.log("File written successfully");   
//   } catch (err) {
//     console.error("Error writing file:", err);
//   }
// };
const ReadFile = async () => {
  try {
   const data= await fs.promises.readFile(filepath, "utf-8");
    console.log(data);   
  } catch (err) {
    console.error("Error writing file:", err);
  }
};
ReadFile();


