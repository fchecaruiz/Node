const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

let objeto = {name : '',surname :'',age : ''}

rl.question("¿Cuál es tu nombre?", (name) => {
    console.log("¡Heyyy!" + name)
    objeto.name=name
    rl.question("¿Cuál es tu apellido?", (surname) => {
        console.log("Mis apellidos son " + surname)
    objeto.surname = surname
   
    rl.question("Cuantos años tienes", (age) => {
        console.log("Tengo " + age, "años")
     objeto.age = age   

        console.log("El objeto es: ", objeto)
        
        rl.close() 
    })
  })
})
