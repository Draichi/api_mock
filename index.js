var express = require('express')
var bodyParser = require('body-parser')
var emoji = require('emojic')
var colorIt = require('color-it')

var app = express()

// * this is the cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(bodyParser.json())
require('./routes/routes.js')(app)

app.listen(3030, function () {
  console.log(" " + colorIt('> yeahh boi ').emerland(), emoji.rocket)
})