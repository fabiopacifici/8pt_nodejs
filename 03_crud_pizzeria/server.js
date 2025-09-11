const express = require('express');
const app = express()
const PORT = 3000
const pizzasRouter = require('./routes/pizzas')
const drinksRouter = require('./routes/drinks')


app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Pizzeria API server started on http://localhost:${PORT}`);
})


// Pizzeria API server Routes
app.get('/', (req, res) => {
  res.send('Welcome to Pizza Server API')
})

// 🍕 CRUD Operations on entity: pizza
app.use('/api/pizzas', pizzasRouter)

// 🥤 CRUD Operations on entity: drink
app.use('/api/drinks', drinksRouter)
