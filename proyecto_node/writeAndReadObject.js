
// FUNCION: ESCRIBIR UN AOBJETO A FORMATO JSON Y LEERLO

const fs = require('fs');

function writeAndRead(path, obj) {//PARAMETROS. RUTA Y OBJETO
// LA FUNCION ENCAPSULA TODO EL FS
 
    const respuesta = JSON.stringify(obj);//DATA

    // escribo en el archivo
    fs.writeFile(path, respuesta, (error) => {
        if (error) {
            console.error("Error al escribir el archivo:", error);
        } else {
            console.log("Se ha creado el archivo correctamente:", path);

            // Leo el archivo
            fs.readFile(path, "utf-8", (error, nombreArchivo) => {
                if (error) {
                    console.error("Error al leer el archivo:", error);
                } else {
                    console.log("Contenido del archivo leído:\n", nombreArchivo);
                }
            })
          }
    })
}


module.exports = { writeAndRead };





