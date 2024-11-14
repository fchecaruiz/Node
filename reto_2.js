const fs = require("fs");

let objeto = {
    name: "paco",
    surname: "lopez",
    age: 50,
};


fs.writeFile("extension.json", '{"name": "paco","surname":"lopez","age": 50}', (error) => {
    if (error) {
        console.log("Error de lectura")
    } else {
    
        fs.readFile("extension.json", "utf-8", (error, data) => {
            if (error) {
                console.log("Error de lectura")
            } else {
                console.log("Se ha creado el fichero correctamente", data)
            }
        }
    )
    }
}
)




 






