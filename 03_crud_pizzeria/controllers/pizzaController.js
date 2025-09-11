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
  res.send('Create a new pizza')
}


// Update
function update(req, res) {
  res.send('Update the entire single pizza with ID:' + req.params.id)
}

// Modify
function modify (req, res) {
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