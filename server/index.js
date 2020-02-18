const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require ('./db')
const articleRouter = require('./routes/article')
const userRouter = require('./routes/user')

const app = express()
const apiPort = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(express.json())
app.use(userRouter)
app.use(articleRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error :'))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
