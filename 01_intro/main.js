console.log('Welcome to nodejs');
const name = process.argv[2] || 'Guest';
console.log(process.argv);

console.log(`Hello, ${name}`);