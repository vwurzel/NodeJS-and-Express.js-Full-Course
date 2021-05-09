const express = require('express')
const morgan = require('morgan')

// const logger = require('./logger')
// const authorize = require('./authorize')

const app = express()
// app.use([logger, authorize])
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})


app.listen(5000, () => {
    console.log('Server running')
})