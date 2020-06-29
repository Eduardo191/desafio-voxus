const express = require('express')

//Controllers
const paymentController = require('./controllers/paymentController')

const routes = express.Router()

//Routes
routes.post('/payments', paymentController.create)
routes.get('/payments', paymentController.index)
routes.delete('/payments/:id', paymentController.delete)
routes.patch('/payments/:id', paymentController.update)

module.exports = routes
