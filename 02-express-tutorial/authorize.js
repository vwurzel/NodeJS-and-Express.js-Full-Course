const authorize = (req, res, next) => {
    const { user } = req.query
    if(user === 'Vinicius'){
        req.user = {name: 'Vinicius', id: 7}
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize