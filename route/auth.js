
const express = require('express')
const router =require('express').Router()
const Collection =require('../controller/controller')
const cors = require('cors')
// const { Collection } = require('mongoose')

router.post('/add-collections', collection.addProducts)
router.delete('/delete-collection/:id', Collection.deleteCollection)
router.put('/update-collection/:id', Collection.updateCollection)
router.get('/register',Collection.signUp) 

router.get('/login',Collection.signIn)

module.exports= router