const Product = require("../model/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products);
    
  } catch (error) {
    console.error("MongoDB error:", error);
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

module.exports = { getAllProducts };
