const Product = require('../models/product')

const getAllProductsStatic = async (req, res, next) => {
    const products = await Product.find({ name : 'vase table' })
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    console.log(req.query);
    res.status(200).json({ msg: 'products rout'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}