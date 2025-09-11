// import express
const express = require('express')
// create the router instance
const router = express.Router()

// Import the pizza Controller
const pizzaController = require('../controllers/pizzaController')


// index (R) 
router.get('/', pizzaController.index)

// show (R)
router.get('/:id', pizzaController.show )

// store (C)
router.post('/', pizzaController.store)

// update (U)
router.put('/:id', pizzaController.update )

// modify (U)
router.patch('/:id', pizzaController.modify)

// destroy (D)
router.delete('/:id', pizzaController.destroy)


module.exports = router