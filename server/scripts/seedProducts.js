const mongoose = require("mongoose");
const Product = require("../model/Product");

const product = require("../Products/first");
const Mobile = require("../Products/Mobile");
const Sports = require("../Products/Sports");
const Cars = require("../Products/Cars");
const Laptop = require("../Products/Laptop");

const allProducts = [...product, ...Mobile, ...Sports, ...Cars, ...Laptop];

mongoose.connect("mongodb+srv://test:test@test.kbupzaw.mongodb.net/test?retryWrites=true&w=majority&appName=test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("MongoDB Connected");

  await Product.deleteMany(); 
  await Product.insertMany(allProducts); 

  console.log("Data saved successfully");
  mongoose.disconnect();
})
.catch((err) => {
  console.log("Error:", err.message);
});
