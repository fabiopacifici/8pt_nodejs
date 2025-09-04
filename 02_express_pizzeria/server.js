const express = require('express')
const app = express()
const PORT = 3000

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



// Set the static folder
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})


// REST API Routes 

app.get('/', (req, res) => {

  res.send('<h1>Welcome to the Pizzeria!</h1><img src="imgs/bufalina.jpeg" alt="Welcome to the Pizzeria">')

})


// Index
app.get('/menu', (req, res) => {


  res.json(menu)

})



//
app.get('/menu/:name', (req, res)=>{
  //res.send('Show a single item')

  console.log(req.params);
  const pizza_name = req.params.name
  const pizza = menu.find((item) =>  item.name.toLowerCase() == pizza_name)

  console.log(pizza);
  
  if(!pizza) {
    res.json({ 
      error: 'pizza not found'
    })
  } else {
    res.json(pizza)
  }


})



/* Examples dynamic routes segments 
'menu/margherita'
'menu/diavola'
'menu/bufalina'
'menu/4_formaggi'


'posts/1'
'posts/2'
'posts/3'
'posts/4'
'posts/5'

'products/1
'products/2'
'products/3'
'products/4'
'products/5'
*/