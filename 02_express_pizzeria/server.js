const express = require('express')
const app = express()
const PORT = 3000

// Set the static folder
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})


// REST API Routes 

app.get('/', (req, res) => {

  res.send('<h1>Welcome to the Pizzeria!</h1><img src="imgs/bufalina.jpeg" alt="Welcome to the Pizzeria">')

})



app.get('/menu', (req, res) => {

  const menu = [
    {
      name: "Margherita",
      image: "imgs/margherita.webp",
      ingredients: ["pomodoro", "mozzarella"],
    }, {
      name: "Marinara",
      image: "imgs/marinara.jpeg",
      ingredients: ["pomodoro", "aglio", "origano"],
    }, {
      name: "Diavola",
      image: "imgs/diavola.jpeg",
      ingredients: ["pomodoro", "mozzarella", "salame piccante"],
    }, {
      name: "Bufalina",
      image: "imgs/bufalina.jpeg",
      ingredients: ["pomodoro", "mozzarella di bufala"],
    }, {
      name: "4 formaggi",
      image: "imgs/4_formaggi.jpeg",
      ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
    }
  ]

  res.json(menu)

})