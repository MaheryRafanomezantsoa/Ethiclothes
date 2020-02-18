const mongoose = require('mongoose'); mongoose.set('useCreateIndex', true);
const url = process.env.MONGODB_URL

mongoose
    .connect(url , { useNewUrlParser: true, useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db