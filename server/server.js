const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); 
const authRoutes = require("./router/auth-router");
require("dotenv").config();

const app = express();


connectDB();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());


app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server http://localhost:${PORT} par chal raha hai`);
});
