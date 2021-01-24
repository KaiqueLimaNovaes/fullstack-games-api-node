var express = require("express");
var app = express();
var routerProduto = express.Router();
var ProdutoController = require("../controllers/ProdutoController");

//routerProduto.get("/cat/:idCat", ProdutoController.getAllPostsCat);
//routerProduto.patch("/:id", ProdutoController.update);
//routerProduto.get("/:id", ProdutoController.getOne);
//routerProduto.delete("/:id", ProdutoController.delete);
routerProduto.get("/", ProdutoController.getAll);
//routerProduto.post("/", ProdutoController.create);

module.exports = routerProduto;