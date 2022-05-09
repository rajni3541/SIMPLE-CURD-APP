const express = require('express')
const app = require('express')()
const mongoose = require('mongoose')
const apiroute = require('./route/auth')
// const { default: mongoose } = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

// const app = express()

 const port=3005
app.use(express.json(),cors())
// app.use('/api/users', apiroute)

app.get('/', (req, res) => {
         res.send("App running")
     })

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser:true} )
.then(() =>{
    console.log('Database Connected')
}).catch(err => console.log(err))


app.listen(port, () =>{
    console.log(`running app on port: 'http://localhost:${port}/`)
})