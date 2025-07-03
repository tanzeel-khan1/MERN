const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./router/auth-router"); 

 app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/api/auth", authRoutes); 

app.get("/", (req, res) => {
  res.status(200).send("WELCOME TO PRACTICE SECTION!");
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
