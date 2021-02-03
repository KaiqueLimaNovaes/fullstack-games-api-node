var express = require("express");
var app = express();
var routerCometarios = express.Router();
var ComentariosController = require("../controllers/ComentariosController");

//routerCometarios.get("/cat/:idCat", ComentariosController.getAllPostsCat);
//routerCometarios.patch("/:id", ComentariosController.update);
//routerCometarios.get("/:id", ComentariosController.getOne);
//routerCometarios.delete("/:id", ComentariosController.delete);
routerCometarios.get("/", ComentariosController.getAll);
routerCometarios.post("/", ComentariosController.create);

module.exports = routerCometarios;