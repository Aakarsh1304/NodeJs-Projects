import readline from 'readline';
import fs from 'fs';
const rl=readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

const filecreation = () => {
    rl.question('Enter the file name: ', (fileName) => {
        rl.question('Enter the content for the file: ', (content) => {
            fs.writeFile(`${fileName}.txt`, content, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                } else {
                    console.log(`File ${fileName} created successfully with content: ${content}`);
                }
                rl.close();
            });
        })
    })
}

filecreation();