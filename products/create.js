const db = require("../db.js")

const post = (request, response) => {
  const body = request.body; // {}
  const { name, price, description } = body;

  if (!name || !price) {
    response.status(400).json({
      status: false,
      error: "Name and Price both are required"
    })
  } else {
    db.serialize(() => {
      db.exec(`INSERT INTO products (
        name,
        price,
        description
      ) VALUES (
        "${name}",
        "${price}",
        "${description}"
      )`, (error) => {
        if (error) {
          response.status(500).json({
            status: false,
            error
          })
        } else {
          response.json({
            status: true,
            message: "New Product created"
          })
        }
      })
    })
  }
}

module.exports = post;