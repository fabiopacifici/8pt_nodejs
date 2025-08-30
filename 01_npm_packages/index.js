console.log('Welcome to nodejs');
import axios from "axios";
import chalk from "chalk";

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
    
    console.log(chalk.bgRed(response.data));
  })
  .catch(error => {
    console.error(chalk.red('Error fetching data:', error));
  });