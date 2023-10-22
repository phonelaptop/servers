const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3001;

console.log(__dirname)

app.use(express.json());

const conteener = [];

app.get("/pizza", (req, res) => {
    res.sendFile(path.join(__dirname, "/pizza.html"));
});
app.get("/taco", (req, res) => {
    res.sendFile(path.join(__dirname, "/taco.html"));
});
app.get("/shark", (req, res) => {
    res.sendFile(path.join(__dirname, "/shark.html"));
});
app.get("/dog", (req, res) => {
    res.sendFile(path.join(__dirname, "/dog.html"));
});

app.post("/api/shark", (req, res) => {
    console.log(req.body);

    res.json(req.body);
});

app.post("/api/pizza", (req, res) => {
    console.log("i got yo pizza");
    console.log(req.body);

    conteener.push(req.body)

    res.json(conteener);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} ...`)
});
