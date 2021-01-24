class HomeController {
    async index(req, res) {
      res.send("API EXPRESS - Rotas de Principais");
    }
  }
  
  module.exports = new HomeController();