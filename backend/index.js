const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
var routes = require('./Routes/routes')



const app = express()

app.use(cors())
app.use(bodyParser.json())

// Database Connection

mongoose.connect('mongodb://localhost:27017/Blog' ,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Database conected')
})
.catch((err)=>{
    console.log('databse is not Coneced', err)
})

app.listen(3000,()=>{
    console.log("server is Running")
})

app.use(express.json())
app.use(routes);
