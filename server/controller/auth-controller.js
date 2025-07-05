const products = require("./Products/first");

const product = async (req, res) => {
  try {
    res.status(200).json(products);
    console.log("Products sent successfully");
  } catch (error) {
    console.error("Product Error:", error);
    res.status(500).send("Something went wrong in product route.");
  }
};

module.exports = { product };
