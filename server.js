const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./routes/index')
require('./config/database')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
