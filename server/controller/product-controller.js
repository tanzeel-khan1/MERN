const product = require("../Products/first");
const Mobile = require("../Products/Mobile");
const Sports = require("../Products/Sports");
const Cars = require("../Products/Cars");
const Laptop = require("../Products/Laptop");
const allProducts = [...product, ...Mobile, ...Sports, ...Cars, ...Laptop];

const getAllProducts = (req, res) => {
  try {

    
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err.message });
  }
};

const getProductById = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const singleProduct = allProducts.find((item) => item.id === productId);

    if (!singleProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch product", error: err.message });
  }
};

const getMobiles = (req, res) => {
  try {
    res.status(200).json(Mobile);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch mobiles", error: err.message });
  }
};
const getSports = (req, res) => {
  try {
    res.status(200).json( Sports);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch Sports", error: err.message });
  }
};
const getCars = (req, res) => {
  try {
    res.status(200).json( Cars);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch Cars", error: err.message });
  }
};
const getLaptop = (req, res) => {
  try {
    res.status(200).json( Laptop);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch animals", error: err.message });
  }
};

module.exports = { getAllProducts, getProductById, getMobiles, getSports, getCars, getLaptop };
