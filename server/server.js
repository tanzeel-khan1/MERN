// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.status(200).send("WELLCOME IS PARCTICE SECTION !");
// });
// app.get("/RES", (req, res) => {
//     res.status(200).send("WELLCOME IS PARCTICE SECTION !");
// });
// const PORT = 7000;
// app.listen(PORT, () => {
//     console.log(`running on ${PORT}`)
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("WELCOME TO PRACTICE SECTION!");
});

app.get("/RES", (req, res) => {
    res.status(200).send("WELCOME TO PRACTICE SECTION /RES!");
});

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
