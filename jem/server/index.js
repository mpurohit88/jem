const express = require('express')
const app = express()
var testAPIRouter = require("./index");
const port =process.env.PORT || 3001;
var cors = require("cors");
app.get('/', (req, res) => res.send('Hello World!'))

app.use("/index", testAPIRouter);
app.use(cors());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))