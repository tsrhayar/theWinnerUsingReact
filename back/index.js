const express = require('express')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
var cors = require('cors')

// Import route
const userRoutes = require('./routes/users')
const profileRoute = require('./routes/profiles')
const categotyRoute = require('./routes/category')
const questionRoute = require('./routes/questions')

// config app
require('dotenv').config()
const app = express()

// connection to database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected to database'))
.catch(() => console.log('database is not connected'))

// middllwares
app.use(express.json())
app.use(expressValidator())
app.use(cors())

// routes middllwares
app.use('/api/user', userRoutes)
app.use('/api/profile', profileRoute)
app.use('/api/category', categotyRoute)
app.use('/api/question', questionRoute)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`app is now listening at port ${port}`))
