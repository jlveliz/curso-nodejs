const fs = require("fs");
require("colors");

const crearArchivoTabla = async (base = 5, list = false, to) => {
  if (list) {
    console.log("================================".green);
    console.log(`       Tabla del:`.green, `${base}`.blue);
    console.log("================================".green);
  }

  try {
    let output="", consola = "";
    for (let index = 1; index <= to; index++) {
      output += `${base} x ${index} = ${base * index}\n`;
      consola += `${base} ${'x'.red} ${index} ${'='.red} ${base * index}\n`;
    }

    if (list) console.log(consola);

    fs.writeFileSync(`./output/tabla-${base}.txt`, output);

    return `tabla-${base}.txt creada`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivoTabla,
};
