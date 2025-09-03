const express = require('express')
const app = express()

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


// Routes
// root route of the server
app.get('/', (req, res) => {

  console.log(req.query);

  res.send('<h1>Hello World</h1>')
})

// route for films
app.get('/person', (req, res)=>{

  //res.send({name: 'Fabio'})
  res.json({
    name: 'Fabio'
  })
})


// route for people
app.get('/people', (req, res)=>{

  res.type('json').send({
    number: 10,
    country: 'Italy'
  })

})


app.get('/films', (req, res)=>{

  const films = [
    {
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      year: 2008
    },
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010
    },
    {
      title: 'Interstellar',
      director: 'Christopher Nolan',
      year: 2014
    }
  ]

  res.json(films)

})