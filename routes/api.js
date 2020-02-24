const express = require('express')
const router = express.Router()


const Job = require('../models/job')



//get all jobs
router.get('/jobs', function(req, res, next) {
   Job.find({}).then(function(jobs) {
       res.send(jobs)
    }).catch(next)
})

//get one job
//router.get

//add new job
//router.post
router.post('/jobs', function(req, res, next) {
    Job.create(req.body).then(function(job) {
        res.send(job)
     }).catch(next)
    })

//update job
//router.put

//delete a job
//router.delete

module.exports = router