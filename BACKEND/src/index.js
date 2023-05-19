import app from "./app.js";
import { port } from './config.js'
await import("./database.js");

console.clear();

app.listen(port);
console.log("Servidor en el puerto", port);