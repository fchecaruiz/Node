const { readConsole } = require('./readConsole');
const { writeAndRead } = require('./writeAndReadObject');

const nombreArchivo = './datos.json';

readConsole((objeto) => {
    console.log("datos usuario:", objeto);
    writeAndRead(nombreArchivo, objeto);
});







