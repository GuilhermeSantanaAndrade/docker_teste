
class controllerClientes {
  incluir = (request, response) => {
    response.json({message: "OK"})
  }
}

module.exports = new controllerClientes;