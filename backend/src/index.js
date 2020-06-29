const express = require('express')
const routes = require('./routes')
const cors = require('cors')
let multer = require('multer');

let upload = multer({ dest:'./src/files' });

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('The server is up on port 3333')
})