const Product = require('../models/product')

const getAllProductsStatic = async (req, res, next) => {
    const products = await Product.find().sort('-price')
    
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if(company) {
        queryObject.company = company
    }
    
    if(name) {
        queryObject.name = { $regex: e, $options: 'i'}
    }

    // console.log(queryObject)
    const result = Product.find(queryObject)
    if (sort) {
        products = products.sort()
    }
    const products = await result
    res.status(200).json({ products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}