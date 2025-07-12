const product = require("../Products/first");

const getAllProducts = (req, res) => {
  try {
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
};

module.exports = { getAllProducts };
