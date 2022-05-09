const app = require('express')()
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose') 
const apiRoute = require('./route/auth')


port = 8080
app.use(express.json())


app.use('/api/users', apiRoute )

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}/api/users`)
})
dotenv.config()
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser:true},
    () => console.log("connected to DB")
    )