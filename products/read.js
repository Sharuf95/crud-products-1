const db = require("../db.js");

function get(req, res) {

  const SELECT_QUERY = `SELECT * from products`;
  db.serialize(() => {
    db.all(SELECT_QUERY, function (error, products) {
      if (error) {
        res.status(500).json({
          status: false,
          error
        })
      } else {
        res.json({
          status: true,
          products,
        })
      }
    })
  });
}

module.exports = get;