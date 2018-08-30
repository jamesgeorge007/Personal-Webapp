const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())

app.use('/api', require('./routes/api'))


app.use(cors())
app.use(morgan('combined'))


mongoose.connect('mongodb://randomguy:randomguy123@ds018508.mlab.com:18508/get-in-touch-records')
  .catch((err) => {
    console.error('eror: ' + err.stack)
    process.exit(1)
  })
mongoose.connection.on('open', () => {
  console.log('connected to database')
})
mongoose.Promise = global.Promise

app.listen(process.env.port || 4000, () => {
  console.log('Server is up in port 4000.......!')
});




























