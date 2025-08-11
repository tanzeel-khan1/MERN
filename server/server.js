const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); 
const authRoutes = require("./router/auth-router");
const productRoutes = require("./router/product-router");
require("dotenv").config();
const app = express();
app.use(express.json()); 
connectDB();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", productRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(` Server http://localhost:${PORT} par chal raha hai`);
});
