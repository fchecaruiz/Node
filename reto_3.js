const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });//entradas y salidas de las preguntas que se hace con question
                                    // input (el usuario escribe),  output(salida por consola)
let objeto = { name:"", surname:"", age: ""};

rl.question("¿indica tu nombre? ", (name) => {
    console.log("¡Heyyy! " + name);
    objeto.name = name;

    rl.question("¿indica tu  apellido? ", (surname) => { 
        console.log("Mis apellidos son " + surname);
        objeto.surname = surname;

        rl.question("¿Cuantos años tienes? ", (age) => { 
            objeto.age = age;
            console.log("Tengo " + age + " años"); 

            console.log("El objeto es: ", objeto);

            // variable donde guardo el objeto en un archivo JSON
            let respuesta = JSON.stringify(objeto); // JASON.stringify. convierte objeto a formato json
            let nombreArchivo = './datos.json'; // nombre que le he puesto al archivo

            fs.writeFile(nombreArchivo, respuesta, (error) => { 
                if (error) {
                    console.log("Error al escribir el archivo:", error);
                } else {
                    console.log("Se ha creado el archivo correctamente:", nombreArchivo);

                    // leer el archivo JSON
                    fs.readFile(nombreArchivo, "utf-8", (error, data) => { 
                        if (error) {
                            console.log("Error al leer el archivo:", error);
                        } else {
                            console.log("Contenido del archivo leído:", data);
                        }
                        rl.close(); 
                    });
                }
            });
        });
    });
});
