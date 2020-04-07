const express = require('express')
const app = express()
var testAPIRouter = require("./index");
const port =process.env.PORT || 3001;
var cors = require("cors");

const Product = require('./controllers/product')

app.get('/', (req, res) => res.send('Hello World!'));
app.pust('/addProduct', (req, res, next) => { new Product(req, res, next).add()})


app.use("/index", testAPIRouter);
app.use(cors());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))