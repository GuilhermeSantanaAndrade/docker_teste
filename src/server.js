const app = require("./app");

const PORT = 3333;
const HOST = "0.0.0.0";

app.listen(3333, HOST, () => {
  console.log("Servidor ON")
});