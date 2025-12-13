const Product = require('../models/product')

const getAllProductsStatic = async (req, res, next) => {
    const products = await Product
    .find({})
    .sort('name')
    .select('name price')
    .limit(10)
    
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, limit } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if(company) {
        queryObject.company = company
    }
    
    if(name) {
        queryObject.name = { $regex: name, $options: 'i'}
    }

    // console.log(queryObject)
    let result = Product.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else {
        result = result.sort('createdAt')
    }

    if (fields) {
        fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }

    if (limit) {
        result = result.limit(4)
    }
    const products = await result
    res.status(200).json({ products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}