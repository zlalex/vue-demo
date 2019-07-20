const express = require('express')
const server = express()

server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

server.get('/', (req, res, next) => {
  res.send('Hello Front End Developer!')
})

server.listen(3000, _ => {
  console.log('listen success!')
})
