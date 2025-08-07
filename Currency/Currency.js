import https from 'https';
import readline from 'readline';
import chalk from 'chalk';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const apikey = 'Use your apiKey';
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;
https.get(url, (res) => {
  let data = "";
  res.on('data', (chunks) => {
    data += chunks;
  });
  res.on('end', () => {
    const rates = JSON.parse(data).conversion_rates;
    rl.question("Enter the amount in Usd: ", (amount) => {
      rl.question(
        "Enter the currency code you want to convert to (e.g., EUR, GBP,INR): ",
        (currencycode) => {
          const rate = rates[currencycode.toUpperCase()];
          if (rate) {
            const convertedAmount = (amount * rate).toFixed(2);
            console.log(
              chalk.blue(
                `Converted amount: ${convertedAmount} ${currencycode.toUpperCase()}`
              )
            );
          } else {
            console.error(chalk.red("Invalid currency code."));
          }
          rl.close();
        }
      );
    });
  });
  res.on('error', (err) => {
    console.error(chalk.red("Error fetching exchange rates:", err));
  });
});
