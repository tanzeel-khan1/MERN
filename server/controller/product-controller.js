const product = require("../Products/first"); 

const getAllProducts = (req, res) => {
  try {
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
};

const getProductById = (req, res) => {
  try {
    const productId = req.params.id;
const singleProduct = product.find((item) => item.id === productId); 

    if (!singleProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch product", error: err.message });
  }
};

module.exports = { getAllProducts, getProductById };
