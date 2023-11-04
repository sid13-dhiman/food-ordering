const connectToMongo = require('./db');

const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json({ limit: '10mb' }));

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/menuData', require('./routes/menuData'))

app.listen(port, () => {
  console.log(`foodOrdering app listening on port http://localhost:${port}`)
})
