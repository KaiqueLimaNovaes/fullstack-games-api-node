var knex = require("../database/connection");

class PedidosController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Pedidos");
  }

  async create(req, res) {
    const { body } = req;

    try {
      await knex("pedidos").insert(body);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR aaaaa" });
    }
  }

  async update(req, res) {
    const { body, params } = req;

    try {
      const data = {
        title: body.title ? body.title : null,
        content: body.content ? body.content : null,
        image: body.image ? body.image : null,
        link: body.link ? body.link : null,
      };

      await knex("pedidos").where("id", params.id).update(data);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR bbbbbb" });
    }
  }

  async getAllPostsCat(req, res) {
    const { params } = req;

    try {
      const pedidos = await knex("pedidos")
      /*
      .join("categorias", "posts.categoria_id", "categorias.id")
      .select("*",  "categorias.nome as categoria")
      .where("categoria_id", params.idCat);
      */

      res.status(200).json({ status: "OK", pedidos: pedidos });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ccccc" });
    }
  }

  async getAll(req, res) {
    try {
      const pedidos = await knex("pedidos")
      /*
        .join("categorias", "posts.categoria_id", "categorias.id")
        .select("posts.id", "posts.title", "categorias.nome as categoria");
      */

      res.status(200).json({ status: "OK", pedidos });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ddddd" });
    }
  }

  async getOne(req, res) {
    const { params } = req;

    try {
      const pedido = await knex("pedidos");

      /*
      const pedido = await knex("pedidos")
        .join("categorias", "posts.categoria_id", "categorias.id")
        .select(
          "posts.id",
          "posts.title",
          "posts.content",
          "posts.link",
          "posts.image",
          "posts.categoria_id",
          "categorias.nome as categoria"
        )
        .where("pedidos.id", params.id);
        */

      res.status(200).json({ status: "OK", pedido: pedido });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR eeeee" });
    }
  }

  async delete(req, res) {
    const { params } = req;

    try {
      const result = await knex("pedidos").where("id", params.id).del();

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR fffff" });
    }
  }
}

module.exports = new PedidosController();