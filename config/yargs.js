const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    type: "number",
    describe: "Base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "list",
    default: false,
    type: "boolean",
    describe: "Permite listar en pantalla los resultados",
  })
  .option("h", {
    alias: "hasta",
    default: 10,
    type: "number",
    describe: "Permite saber hasta que numero vamos a multiplicar la base",
    demandOption: false,
  })
  .check((argv, option) => {
    if (isNaN(argv.base)) throw "La base debe ser un número";
    if (isNaN(argv.hasta)) throw "El Hasta debe ser un número";
    return true;
  }).argv;

module.exports = argv;
