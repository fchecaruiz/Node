const { readConsole } = require('./reto_4_read_promesas');
const { writeAndRead } = require('./reto_4_write_promesas');

const nombreArchivo = './datos.json';

readConsole(async(objeto) => {
    console.log("datos usuario:", objeto)
    
    try {
        await writeAndRead(nombreArchivo, objeto)
    } catch (error) {
        console.log("Ha ocurrido un error ", error)
    }
})


