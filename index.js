const { response } = require('express')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var bodyParser = require('body-parser')
var urlEncodedParser = bodyParser.urlencoded({extended: false})

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({extended: false}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/views/pages/calc_rates.ejs', (req, res) => {
    res.render('calc_rates.ejs', {weight: req.body.weight, mailType: req.body.mailType})
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
