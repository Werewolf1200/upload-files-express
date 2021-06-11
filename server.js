const express = require("express"); // Guardar en una variable
const aplicacion = express(); // Convierte la variable anterior en función
const multer = require('multer');
const mimeTypes = require('mime-types'); // Brinda la extención e información del archivo

const storage = multer.diskStorage({ // Almacenamiento en disco
    destination: 'uploads/', // Destino donde guardara los archivos
    filename: function(peticion, file, callback) {
        callback("", Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype));//Asigna el nombre al archivo
        // Date.now -> (TimeStamp) que brinda la fecha con milisegundos
    }
})

const upload = multer({
    storage: storage 
})

aplicacion.get("/", (peticion, resultado) => {  // dirección, funcion a ejecutar
    //console.log(__dirname);
    resultado.sendFile(__dirname + "/views/index.html"); // Lee la ruta del archivo
}); 

aplicacion.post("/files", upload.single('avatar') ,(peticion, resultado) => {
    resultado.send("Subido Correctamente");
});


aplicacion.listen(8989, () => console.log("Server Started"));

// Dependencia´: cors -> sirve para subir archivos con Ajax