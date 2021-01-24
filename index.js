var bodyParser = require("body-parser");
var express = require("express");
const cors = require("cors");
var app = express();
var router = require("./routes/routes");
var routerProduto = require("./routes/routesProduto");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// cors
app.use(cors());

app.use("/", router);
app.use("/produto", routerProduto);

app.listen(3005, () => {
  console.log("Servidor rodando");
});