const express = require('express')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser')

//init app
const app = express()

// connect to mongodb
mongoose.connect('mongodb://localhost/job-brd')
mongoose.Promise = global.Promise


app.use('/api', require('./routes/api'))

// init routes
app.use('/api', require('./routes/api'))

// error handling middelware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message})
})


app.listen(process.env.port || 4000, function () {
    console.log('ready for  requests')
})