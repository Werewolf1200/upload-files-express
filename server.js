const express = require("express"); // Guardar en una variable
const aplicacion = express(); // Convierte la variable anterior en función
const multer = require('multer');

const upload = multer({
    dest: 'uploads/' // Destino donde guardara los archivos
})

aplicacion.get("/", (peticion, resultado) => {  // dirección, funcion a ejecutar
    //console.log(__dirname);
    resultado.sendFile(__dirname + "/views/index.html"); // Lee la ruta del archivo
}); 

aplicacion.post("/files", upload.single('avatar') ,(peticion, resultado) => {
    resultado.send("Subido Correctamente");
});


aplicacion.listen(8989, () => console.log("Server Started"));