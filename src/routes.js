const routes = require("express").Router();
const controllerClientes = require("./controllers/clientes");

routes.post("/clientes", controllerClientes.incluir)

routes.get("/clientes", (req, res) => {
  res.send("Hello world teste")
});

module.exports = routes;