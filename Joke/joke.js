import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
    const url='https://official-joke-api.appspot.com/random_joke'
     https.get(url,(res)=>{
        let data=""
        res.on('data',(chunck)=>{
          data+=chunck;
        })
        res.on('end',()=>{
           const joke = JSON.parse(data);
              console.log(chalk.blue('Here is a joke for you:'));
              console.log(chalk.green(`${joke.setup}`));
              console.log(chalk.yellow(`${joke.punchline}`));
        })
        res.on('error',(err)=>{
            console.error(chalk.red('Error fetching joke:', err));
        })
     })

     
}
getJoke()
