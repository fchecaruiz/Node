

const readline = require('readline');

const rl = readline.createInterface({input: process.stdin,output: process.stdout});

function readConsole(callback){

    let objeto = { name: "", surname: "", age: "" };

    rl.question("¿Indica tu nombre? ", (name) => {
        objeto.name = name;

        rl.question("¿Indica tu apellido? ", (surname) => {
            objeto.surname = surname;

            rl.question("¿Cuántos años tienes? ", (age) => {
                objeto.age = age;

                // llamo callback con el objeto completo
                callback(objeto);
                //fin
                rl.close();
            });
        });
    });
}


module.exports = { readConsole };






























// const readline = require('readline');

// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// function readConsole(callback) {
//     let objeto = { name: "", surname: "", age: "" };

//     rl.question("¿Indica tu nombre? ", (name) => {
//         objeto.name = name;

//         rl.question("¿Indica tu apellido? ", (surname) => { 
//             objeto.surname = surname;

//             rl.question("¿Cuántos años tienes? ", (age) => { 
//                 objeto.age = age;

                
//                 callback(objeto);

//                 rl.close(); 
//             });
//         });
//     });
// }
// readConsole()

// module.exports = { readConsole };















































// const writeAndRead = require('./writeAndReadObject')




// const readline = require('readline');


// const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); 


// function readConsole(callback) {
//     let objeto = { name: "", surname: "", age: "" };
 
// rl.question("¿indica tu nombre? ", (name) => {
//     console.log("¡Heyyy! " + name);
//     objeto.name = name;

//     rl.question("¿indica tu  apellido? ", (surname) => { 
//         console.log("Mis apellidos son " + surname);
//         objeto.surname = surname;

//         rl.question("¿Cuantos años tienes? ", (age) => { 
//             objeto.age = age;
//             console.log("Tengo " + age + " años"); 

//             console.log("El objeto es: ", objeto);

        
//         });
//     });
// })
//    }
//    module.exports = {readConsole}