const { crearArchivoTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

console.clear();

//Argumentos de consola

/**
 * Forma 1 no tan beneficiosa
 */
// const [, , arg3 = "base=5"] = process.argv;
// const [, base] = arg3.split("=");

/**
 * Forma 2
 */

const base = argv.base;
const list = argv.list;
const to = argv.h;

crearArchivoTabla(base, list, to)
  .then((fileName) => console.log(fileName.rainbow))
  .catch((err) => console.log(err.red));
