//const readlinePromises = require('node:readline/promises');

// the y catch/////////////////////////////////////////////////////////////////////////////////////////////////////////

//const rl = readlinePromises.createInterface({input: process.stdin,output: process.stdout});

// function readConsole(callback){

//     let objeto = { name: "", surname: "", age: "" };

//     rl.question("¿Indica tu nombre? ")
//     .then ( (name)=> {
//         objeto.name = name;
//         console.log( "mi nombre es " + objeto.name)
//        return rl.question ( "Cual es tu apellido")
//     })

//     .then ( (surname) => {
//         objeto.surname = surname
//         console.log( "Mi apellido es " + objeto.surname)
//         return rl.question ("Cuantos años tienes")
//     })

//     .then ( (age) =>{
//         objeto.age = age
//         console.log ("Tengo " + objeto.age + "años")
        

//         console.log ( "El objeto es " , objeto)
//         callback (objeto)
//         rl.close()
//     })
//     .catch((error)=>{
//         console.log ("ha courrido un error " + error)
//     })
// }
// readConsole((objeto) =>{
//     console.log("El objeto creado es " ,objeto)
// })
   
// module.exports = { readConsole }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ASYNC AWAIT Y TRY CACTH

const readlinePromises = require('node:readline/promises');

const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });

async function readConsole(callback) {
    let objeto = { name: "", surname: "", age: "" };

    try {
        objeto.name = await rl.question("¿indica tu nombre? ")
        console.log("mi nombre es " + objeto.name);

        objeto.surname = await rl.question("¿cual es tu apellido? ")
        console.log("mi apellido es " + objeto.surname);

        objeto.age = await rl.question("¿cuantos años tienes? ")
        console.log("tengo " + objeto.age + " años")

        console.log("El objeto es: ", objeto)
        callback(objeto)
        rl.close()

    } catch (error) {
        console.log("Ha ocurrido un error: " + error)
        }
}

// readConsole((objeto) => {
//     console.log("El objeto creado es: ", objeto)
// });

module.exports = { readConsole }