var express = require("express");
var app = express();
var routerPedidos = express.Router();
var PedidosController = require("../controllers/PedidosController");

//routerCometarios.get("/cat/:idCat", PedidosController.getAllPostsCat);
//routerCometarios.patch("/:id", PedidosController.update);
//routerCometarios.get("/:id", PedidosController.getOne);
//routerCometarios.delete("/:id", PedidosController.delete);
routerPedidos.get("/", PedidosController.getAll);
routerPedidos.post("/", PedidosController.create);

module.exports = routerPedidos;