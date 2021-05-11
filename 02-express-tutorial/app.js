const express = require('express')
let { people } = require('./data')

const app = express()

// Static assets
app.use(express.static('./methods-public'))

// Parse form data
app.use(express.urlencoded({ extended: false }))

// Parse JSON
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.json({success: true, data: people})
})
app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
      }
      res.status(201).json({ success: true, person: name })
    })
app.post('/login', (req, res) => {
    const { name } = req.body
    if(name) {
        return res.send(`Welcome ${name}`)
    }
    res.send('Please return and enter your name')
})
app.post('/api/insomnia/people', (req, res) => {
    const { name } = req.body
    if(name) {
        return res.send([...people, name])
    }
    res.send('Please return and enter your name')
})


app.listen(5000, () => {
    console.log('Server running')
})