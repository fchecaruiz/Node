const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function readConsole(callback) {
    let objeto = { name: "", surname: "", age: "" };

    rl.question("¿Indica tu nombre? ", (name) => {
        objeto.name = name;

        rl.question("¿Indica tu apellido? ", (surname) => { 
            objeto.surname = surname;

            rl.question("¿Cuántos años tienes? ", (age) => { 
                objeto.age = age;

                
                callback(objeto);

                rl.close(); 
            });
        });
    });
}
readConsole()
