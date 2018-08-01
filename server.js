'use strict'


const knex = require('./knex')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.static('public'))


app.get('/lectures', function(req,res,next){
  knex('lectures').then(function(data){
    res.status(200).send(data)
  })
})

app.get('/comments', function(req,res,next){
  knex('comments').then(function(data){
    res.status(200).send(data)
  })
})

app.get('/:id', function(req,res,next){
  res.status(200).send(req.params.id)

})

app.post('/', function(req,res,next){
  res.status(200).send("success!")
})

// app.patch('//:id', function(req,res,next){
//   let result = { id:req.params.id, name: req.body.name }
//   res.status(200).send(result)
//
// })
//
// app.delete('//:id', function(req,res,next){
//   res.status(200).send(req.params.id)
//
// })
//

app.use(function(req,res,next){
  res.sendStatus(400)
})


app.listen(port, function(){
  console.log("listening on port", port)
})





module.exports = app
