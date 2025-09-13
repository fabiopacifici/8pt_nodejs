// Import the menu module
const menu = require('../data/pizzas')

// Index
function index(req, res) {

  //res.send('Show a list of pizzas')
  //console.log(req.query.ingredient);



  let filtered_menu = menu

  if (req.query.ingredient) {
    filtered_menu = menu.filter(pizza => pizza.ingredients.includes(req.query.ingredient))
  }


  console.log(filtered_menu);
  res.json(filtered_menu)

}


// Show
function show(req, res) {

  const { id } = req.params
  console.log(id);


  const pizza = menu.find(item => item.id === parseInt(id))
  console.log(pizza);

  if (!pizza) {

    return res.status(404).json({
      error: true,
      message: 'Resource not found'
    })
  }

  //res.send('Show the single pizza with ID:' + req.params.id)
  res.json(pizza)

}


// Store
function store(req, res) {
  console.log('👉', req.body);

  // generate a new id for the item to add
  const newPizzaId = menu[menu.length - 1].id + 1
  console.log(newPizzaId);
  // request object destructuring 
  const {name, image, ingredients} = req.body
  // create the new object to add
  const newPizza = {
    id: newPizzaId,
    name,
    image,
    ingredients
  }
  console.log(newPizza);
  
  // push the object into the array
  menu.push(newPizza)

  // log the menu
  console.log(menu);
  

  // return the response with the status code 201 (resource created)
  res.status(201).json(newPizza)

  //res.send('Create a new pizza')
}


// Update
function update(req, res) {
  const { id } = req.params
  console.log(id);


  const pizza = menu.find(item => item.id === parseInt(id))
  console.log(pizza);

  if (!pizza) {

    return res.status(404).json({
      error: true,
      message: 'Resource not found'
    })
  }
  
  const {name, image, ingredients} = req.body

  pizza.name = name
  pizza.image = image
  pizza.ingredients = ingredients

  res.json(pizza)
  //res.send('Update the entire single pizza with ID:' + req.params.id)
}

// Modify
function modify (req, res) {
  //TODO [Bonus]
  res.send('Partial update for the single pizza with ID:' + req.params.id)
}


// Destroy
function destroy(req, res){

  const { id } = req.params
  console.log(id);


  const pizza = menu.find(item => item.id === parseInt(id))
  console.log(pizza);

  if (!pizza) {

    return res.status(404).json({
      error: true,
      message: 'Resource not found'
    })
  }

  menu.splice(menu.indexOf(pizza), 1);
  console.log(menu);

  res.sendStatus(204)
  //res.send('Delete the single pizza with ID:' + req.params.id)
}


module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}
