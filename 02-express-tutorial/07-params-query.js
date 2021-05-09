const express = require('express')
const {
    products
} = require('./data')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {
            id,
            name,
            image
        } = product
        return {
            id,
            name,
            image
        }
    })
    res.json(newProducts)
})
app.get('/api/products/:id', (req, res) => {
    const singleProduct = products.find((product) => product.id == req.params.id)
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    // console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const {
        search,
        limit
    } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(!sortedProducts.length){
        return res.send('No product found, check your search criterials')
    }
    res.send(sortedProducts)
})


app.listen(5000, () => {
    console.log('Server running')
})