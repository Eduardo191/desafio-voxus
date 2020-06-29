const express = require('express')
const multer = require('multer')

const upload = multer({ dest: 'src/files/' })

//Controllers
const paymentController = require('./controllers/paymentController')

const routes = express.Router()

//Routes
routes.post('/payments', paymentController.create)
routes.get('/payments', paymentController.index)
routes.delete('/payments/:id', paymentController.delete)
routes.patch('/payments/:id', paymentController.update)
routes.post('/upload', upload.single("file"), (req, res) => {
  res.send('File uploaded')
})

module.exports = routes
