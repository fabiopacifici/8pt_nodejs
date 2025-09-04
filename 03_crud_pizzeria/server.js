const express = require('express');
const app = express()
const PORT = 3000
const menu = [
  {
    id: 1,
    name: "Margherita",
    image: "imgs/margherita.webp",
    ingredients: ["pomodoro", "mozzarella"],
  },
  {
    id: 2,
    name: "Marinara",
    image: "imgs/marinara.jpeg",
    ingredients: ["pomodoro", "aglio", "origano"],
  },
  {
    id: 3,
    name: "Diavola",
    image: "imgs/diavola.jpeg",
    ingredients: ["pomodoro", "mozzarella", "salame piccante"],
  },
  {
    id: 4,
    name: "Bufalina",
    image: "imgs/bufalina.jpeg",
    ingredients: ["pomodoro", "mozzarella di bufala"],
  },
  {
    id: 5,
    name: "4 formaggi",
    image: "imgs/4_formaggi.jpeg",
    ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
  }
]
const drinks = [
  {
    id: 1,
    name: "Fruit Juice",
    image: "imgs/fruit_juice.jpeg",
    price: 2,
  },
  {
    id: 2,
    name: "Apple Juice",
    image: "imgs/apple_juice.jpeg",
    price: 2,
  },
   {
    id: 3,
    name: "Water",
    image: "imgs/water.jpeg",
    price: 1,
  }
]



app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Pizzeria API server started on http://localhost:${PORT}`);
})


// Pizzeria API server Routes

app.get('/', (req, res) => {
  res.send('Welcome to Pizza Server API')
})

// 🍕 CRUD Operations on entity: pizza

// index (R) 
app.get('/api/pizzas', (req, res) => {

  //res.send('Show a list of pizzas')

  res.json(menu)

})

// show (R)
app.get('/api/pizzas/:id', (req, res) => {

  const { id } = req.params
  console.log(id);


  const pizza = menu.find(item => item.id === parseInt(id))
  console.log(pizza);
  
  if(!pizza) {

    res.status(404).json({
      error: true,
      message: 'Resource not found'
    })
  }

  //res.send('Show the single pizza with ID:' + req.params.id)
  res.json(pizza)

})

// store (C)
app.post('/api/pizzas', (req, res) => {
  res.send('Create a new pizza')
})

// update (U)
app.put('/api/pizzas/:id', (req, res) => {
  res.send('Update the entire single pizza with ID:' + req.params.id)
})

// modify (U)
app.patch('/api/pizzas/:id', (req, res) => {
  res.send('Partial update for the single pizza with ID:' + req.params.id)
})

// destroy (D)
app.delete('/api/pizzas/:id', (req, res) => {
  res.send('Delete the single pizza with ID:' + req.params.id)
})


// 🥤 CRUD Operations on entity: drink

// index (R)
app.get('/api/drinks', (req, res)=>{
  res.json(drinks)
})

// show (R)
app.get('/api/drinks/:id', (req, res)=>{
  res.send('Show the single drink id:' + req.params.id )
})

// store (C)
app.post('/api/drinks', (req, res) => {
    res.send('Create a new drink')
})


// update (U)
app.put('/api/drinks/:id', (req, res)=>{
  res.send('Update the drink with ID: ' + req.params.id)
})

// modify (U)
app.patch('/api/drinks/:id', (req, res) => {
  res.send('Partial update the drink with ID: ' + req.params.id)
})

// destroy (D)

app.delete('/api/drinks/:id', (req, res) => {
  res.send('Destroy the drink with ID: ' + req.params.id)
})