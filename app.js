const PORT = 4000;

const express = require("express");
const app = express();

app.set('view engine', 'ejs');

const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./mySite");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index");
});

// app.get("", (req, res) => {
//     res.render("index");
// });
// app.get("", (req, res) => {
//     res.render("index");
// });

app.listen(PORT, () => {
    console.log("Server is up on port "+ PORT);
});