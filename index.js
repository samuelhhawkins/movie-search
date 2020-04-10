// Require needed node_modules
let express = require('express')

//declare new express app

let app = express()

//declare some routes

app.get('/', (req, res) => {
  res,send('Home page stub')
})

//pick a port
app.listen(3000, () => {
  console.log('ready to go')
})
