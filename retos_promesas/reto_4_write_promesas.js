//const fs = require('fs/promises');

// then y catch ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let obj = {name:"nando", surname:"checa ruiz ruiz cordoba"}

// function writeAndRead(path, obj) {

//    let respuesta = JSON.stringify(obj);

//     fs.writeFile(path, respuesta)
//     .then ( ()=> {
//         console.log("Archivo creado correctamente")
//         return fs.readFile (path, "utf8")
//     })
//     .then((datosJson) => {
//         console.log("archivo de datos json " + datosJson)
//     })
      
//     .catch((error) =>{
//         console.log ("ha ocurrido un error " +error)
//     })
// }
// writeAndRead("archivo.json", obj);

// module.exports = { writeAndRead };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ASYNC Y AWAIT Y TRY CATCH

const fs = require('fs/promises'); 

let obj = { name: "", surname: "" };

async function writeAndRead(path, obj) {
  try {

    let respuesta = JSON.stringify(obj)

    await fs.writeFile(path, respuesta)
    console.log("Se ha creado un archivo correctamente:", path)

    let datosJson = await fs.readFile(path, "utf8")
    console.log ("archivo de datos jason " + datosJson)

  } catch (error) {
    console.error("Ha ocurrido un error:", error);
  }
}

//writeAndRead("archivo.json", obj)

module.exports = { writeAndRead }



