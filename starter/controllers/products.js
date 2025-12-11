

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({ msg: 'products testing routes'})
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products rout'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}