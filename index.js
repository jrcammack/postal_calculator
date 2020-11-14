const { response } = require('express')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var bodyParser = require('body-parser')


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({extended: false}))
  .use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/calc_rates.ejs', (req, res) => {
    res.render('calc_rates.ejs', {weight: req.body.weight, mailType: req.body.mailType})
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
