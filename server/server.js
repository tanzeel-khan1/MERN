// const express = require("express");
// const app = express();
// const cors = require("cors");
// const authRoutes = require("./router/auth-router");

// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// }));

// app.use(express.json());
// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.status(200).send("WELCOME TO PRACTICE SECTION!");
// });

// const PORT = 7000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require("express");
const connectDB = require("./config/db"); // ✅ import MongoDB connection
const authRoutes = require("./router/auth-router");
const cors = require("cors");

const app = express();
connectDB(); // ✅ yahan MongoDB se connection banaya

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server http://localhost:${PORT} par chal raha hai`);
});
