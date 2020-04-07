const MySQL = require("mysql");

  dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jem'
  };

let connectionPool = MySQL.createPool(
  { 
    host: dbOptions.host, 
    user: dbOptions.user, 
    password: dbOptions.password, 
    port: dbOptions.port, 
    database: dbOptions.database 
  });

  const getConnection = async function (done) {
    try {
       connectionPool.getConnection(done);
    } catch (ex) {
       console.log("ex........", ex);
       throw ex;
    }
 };

 module.exports = { getConnection: getConnection };
