console.log('Welcome to nodejs');
import axios from "axios";
import chalk from "chalk";

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('Ajax output below:');    
    console.log(response.data.title);
    
  })
  .catch(error => {
    console.error(chalk.red('Error fetching data:', error));
  });