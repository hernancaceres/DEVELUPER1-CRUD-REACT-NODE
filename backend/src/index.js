import app from "./app.js";
import { sequelize } from "./database/database.js";

import "../src/models/Publicacion.js"
import "../src/models/Usuario.js"


async function main() {
  await sequelize.sync({force: true});
  app.listen(4000);
  console.log("Server on port 4000");
}

main();