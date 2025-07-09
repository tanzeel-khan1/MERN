const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./router/auth-router");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
require("dotenv").config();

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server http://localhost:${PORT} par chal raha hai`);
});
