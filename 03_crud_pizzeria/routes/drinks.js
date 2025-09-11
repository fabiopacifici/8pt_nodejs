const express = require('express')
const router = express.Router()

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


// index (R)
router.get('/', (req, res) => {
  res.json(drinks)
})

// show (R)
router.get('/:id', (req, res) => {
  res.send('Show the single drink id:' + req.params.id)
})

// store (C)
router.post('/', (req, res) => {
  res.send('Create a new drink')
})


// update (U)
router.put('/:id', (req, res) => {
  res.send('Update the drink with ID: ' + req.params.id)
})

// modify (U)
router.patch('/:id', (req, res) => {
  res.send('Partial update the drink with ID: ' + req.params.id)
})

// destroy (D)

router.delete('/:id', (req, res) => {
  res.send('Destroy the drink with ID: ' + req.params.id)
})


module.exports = router