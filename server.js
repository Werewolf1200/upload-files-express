const express = require("express"); // Guardar en una variable
const aplicacion = express(); // Convierte la variable anterior en función

aplicacion.get("/", (peticion, resultado) => {
    resultado.send("Hola Mundo");
}); // dirección, funcion a ejecutar


aplicacion.listen(8989, () => console.log("Server Started"));