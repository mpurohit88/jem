const connection = require('../config/db_connection');

const Product = function(params) {
  this.product_name = params.product_name;
  this.gross_weight = params.gross_weight;
  this.stone_weight = params.stone_weight;
  this.net_weight = params.net_weight;
  this.purity = params.purity;
  this.fine_weight = params.fine_weight;
  this.stone_charges = params.stone_charges;
  this.remark = params.remark;
  this.created_by = params.created_by;
}

Product.prototype.add = function() {
  return new Promise( (resolve, reject) => {
    connection.getConnection( (error, connection) => {

      if(error) {
        throw error;
      } else {
  
        const values = [
          [this.product_name, this.gross_weight, this.stone_weight, this.net_weight, this.purity, this.fine_weight, this.stone_charges, this.remark, this.created_by]
        ];
  
        connection.query(
          `INSERT INTO product(product_name, gross_weight, stone_weight, net_weight, purity, fine_weight, stone_charges, remark, created_at, created_by) VALUES ?`,
          [values],
          (error, rows, fields) => {
              if (!error) {
                resolve(rows);
            } else {
              console.log('Error...', error);
              reject(error);
            }
        });
      }
    });
  });
}

module.exports = Product;