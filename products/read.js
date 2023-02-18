const db = require("../db.js");


const GET_ALL_PRODUCT_QUERY = `SELECT * from products`;

const getAllProducts = (request, response) => {
  db.serialize(() => {
    db.all(GET_ALL_PRODUCT_QUERY, (error, products) => {
      if (error) {
        console.error(error);
        response.status(500).send('Server Error')
      } else {
        response.json(products)
      }
    })
  });
}

module.exports = getAllProducts;