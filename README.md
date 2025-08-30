# Steps

- initialize the project with npm init -y
- create a file index.js in the project's root folder
- add a console.log statement in index.js
- install the dependencies with npm install (`npm i axios`)
- import axios inside your script
- make a GET request using axios

## initialize the project with npm init -y

```bash

npm init -y

```

## Create a file index.js in the project's root folder

```bash
#  Create the index.js file and 
touch index.js

# Create the index.js file and put the log inside
echo "console.log('Hello, World!');" > index.js
```

## Install the dependencies with npm install (`npm i axios`)

```bash
npm i axios
```

## Import axios inside your script

```javascript
const axios = require('axios');
```

> Note: To use the ESM syntax you need to add `"type": "module"` in your package.json file. then you can use `import` instead of `require`.

## Make a GET request using axios

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

```
