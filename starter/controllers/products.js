const Product = require('../models/product')

const getAllProductsStatic = async (req, res, next) => {
    const products = await Product.find({ featured:false })
    res.status(200).json({ products })
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products rout'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}