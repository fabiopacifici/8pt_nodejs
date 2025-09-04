# RECAP NODEJS EXPRESS API

## initialize the project

```bash
touch server.js
npm init -y
npm install express

```

## create a simple server

```javascript

const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

## run the server

```bash
npm run dev
```

Remember to add this to your package.json

```json
"scripts": {
    "dev": "npde --watch server.js"
}
```
