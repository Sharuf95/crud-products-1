const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");


const getProducts = require("./products/read.js");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.get(`/products`, getProducts);


app.post(`/products`, (request, response) => {
  response.json({ status: true })
});

app.put(`/products/:productId`, (request, response) => {
  response.json({ status: true })
});

app.delete("/products/:products", (request, response) => {
  response.json({ status: true })
})

app.listen(PORT, () => {
  console.log(`APP Running on http://localhost:${PORT}`)
});