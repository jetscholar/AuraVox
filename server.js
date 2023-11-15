const port = 8888
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.set('views', __dirname + '/views')
app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.json({limit: '1mb'}))

// Routes
const indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(port, () => {
    console.log('listening on port: ' + port)
})

