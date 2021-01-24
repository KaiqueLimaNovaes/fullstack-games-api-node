var knex = require("../database/connection");

class ProdutoController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Produtos");
  }

  async create(req, res) {
    const { body } = req;

    try {
      await knex("produtos").insert(body);

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

      await knex("produtos").where("id", params.id).update(data);

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR bbbbbb" });
    }
  }

  async getAllPostsCat(req, res) {
    const { params } = req;

    try {
      const produtos = await knex("produtos")
      /*
      .join("categorias", "posts.categoria_id", "categorias.id")
      .select("*",  "categorias.nome as categoria")
      .where("categoria_id", params.idCat);
      */

      res.status(200).json({ status: "OK", produtos: produtos });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ccccc" });
    }
  }

  async getAll(req, res) {
    try {
      const produtos = await knex("produtos")
      /*
        .join("categorias", "posts.categoria_id", "categorias.id")
        .select("posts.id", "posts.title", "categorias.nome as categoria");
      */

      res.status(200).json({ status: "OK", produtos });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ddddd" });
    }
  }

  async getOne(req, res) {
    const { params } = req;

    try {
      const produto = await knex("produtos");

      /*
      const produto = await knex("produtos")
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
        .where("produtos.id", params.id);
        */

      res.status(200).json({ status: "OK", produto: produto });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR eeeee" });
    }
  }

  async delete(req, res) {
    const { params } = req;

    try {
      const result = await knex("produtos").where("id", params.id).del();

      res.status(200).json({ status: "OK" });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR fffff" });
    }
  }
}

module.exports = new ProdutoController();