const getAllProductsStatic = async (req, res, next) => {
    throw new Error('testing async errors')
    res.status(200).json({ msg: 'products testing routes'})
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products rout'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}