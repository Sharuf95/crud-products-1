const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");
const get = require("./products/read.js");
const post = require("./products/create.js");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get(`/products`, get);
app.post(`/products`, post);
app.put(`/products/:productId`, put);
app.delete("/products/:products", deleteProduct);

app.listen(PORT, () => {
  console.log(`APP Running on http://localhost:${PORT}`)
});