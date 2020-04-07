const Product = require('../models/product.js');

const add = async function(req, res, next) {

  const result = await new Product(req.body).add();

  res.send({result: 'success'});
}

exports.default = { add };