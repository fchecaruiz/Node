
// const readlinePromises = require('node:readline/promises');

// const rl = readlinePromises.createInterface({input: process.stdin,output: process.stdout});
//-----------------------------------------------------------------------------------------------------------------------------------

// let objeto = {name : '',surname :'',age : ''}

// .then y .catch
// rl.question("¿Cuál es tu nombre?")

// .then( (name) => {
//     console.log("¡Heyyy!" + name);
//     objeto.name=name
//     return rl.question("cual es tu apelido")})

// .then( (surname)=> {
//     console.log("Mis apellidos son " + surname);
//     objeto.surname = surname
//     return rl.question("cuantos años tienes");
// })
   
// .then( (age) =>{
//    console.log("Tengo " + age, "años");
//      objeto.age = age   

// console.log("El objeto es: ", objeto);
// rl.close();
// })
        
// .catch((error)=>{
//     console.log(("Ha ocurrido un error" + error));
// })

//async y await-----------------------------------------------------------------------------------------------------------
//CON ASYNC AWAIT SIEMPRE SE CREA ANTES UNA FUNCION -----------------------------------------------------------------------

// let crearFuncion = async () => {

//     let objeto = {name : '',surname :'',age : ''}

//     objeto.name = await rl.question ("cual es tu nombre?")
//     console.log ( "mi nombre es " + objeto.name);
//     console.log()

//     objeto.surname = await rl.question ("cual est u apellido? " + objeto.surname)
//     console.log ("Mi apellido es " + objeto.surname)
//     console.log()

//     objeto.age = await rl.question ("cuantos años tienes? ")
//     console.log ( "Tengo " + objeto.age + "años")
//     console.log()

//     console.log ( "mi nombre es "+ objeto.name + " mis apellidos son " + objeto.surname
//                  + " y tengo " + objeto.age + " años " )
//                  console.log()
//     console.log ( "el objeto es " +objeto) 
//     rl.close()
// }

// ERRORES TRY Y CATCH---------------------------------------------------------------------------------------------------------------------
const readlinePromises = require('node:readline/promises');

const rl = readlinePromises.createInterface({input: process.stdin,output: process.stdout});

let crearFuncion = async () => {
try{
    let objeto = {name : '',surname :'',age : ''}

    objeto.name = await rl.question ("cual es tu nombre?")
    console.log ( "mi nombre es " + objeto.name);
    console.log()

    objeto.surname = await rl.question ("cual est u apellido? " + objeto.surname)
    console.log ("Mi apellido es " + objeto.surname)
    console.log()

    objeto.age = await rl.question ("cuantos años tienes? ")
    console.log ( "Tengo " + objeto.age + "años")
    console.log()

    console.log ( "mi nombre es "+ objeto.name + " mis apellidos son " + objeto.surname
                 + " y tengo " + objeto.age + " años " )
                 console.log()
    console.log ( "el objeto es " +objeto) 
    rl.close()
    
}
catch (error){
 console.log(" HA OCURRIDO UN ERROR " + error)
}
}
crearFuncion()
//---------------------------------------------------------------------------------------------------------------------------------------------------

    















