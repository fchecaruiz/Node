const readline = require('readline')

const rl = readline.createInterface(process.stdin,process.stdout)

let objeto = {name: '', surname: '', age: ''}

rl.question("¿Cuál es tu nombre? ", (name) => {
    console.log("¡Heyyy! " + name)
    objeto.name = name;

    rl.question("¿Cuál es tu apellido? ", (surname) => {
        console.log("Mis apellidos son " + surname)
        objeto.surname = surname;

        rl.question("¿Cuántos años tienes? ", (age) => {
            console.log("Tengo " + age + " años")
            objeto.age = age;

            console.log("El objeto es: ", objeto)
            rl.close();

           
            fs.writeFile("extension.json", JSON.stringify(objeto),(error) => {
                if (error) {
                    console.log("Error al escribir el archivo");
                } else {
                    fs.readFile("extension.json", "utf-8", (error, data) => {
                        if (error) {
                            console.log("Error de lectura");
                        } else {
                            console.log("Se ha creado el fichero correctamente: ", data)
                        }
                    }
                )
                }
            }
        )
    }
)
}
)
}
)
