const Product = require('../models/product.js');

const add = function(req, res, next) {

  const result = new Product(req.body).add();

  res.send({result: 'success'});
}

exports.default = { add };