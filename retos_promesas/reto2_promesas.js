const fs = require ('fs/promises');

let objeto = {
    name: "manuel",
    surname: "lopez",
    age: 2222250,
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// then y catch
fs.writeFile("extension.json", JSON.stringify(objeto))

.then(()=>{
     console.log("Fichero creado correctamente");
     return fs.readFile("extension.json", "utf-8");
})
    
.then((data)=>{
    console.log("el fichero se ha leido correctamente");
    console.log(data);
})
    
.catch((error) =>{
    console.log("Ha ocurrido un error", error);
    console.log(error);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async await
write = async () => {
await  fs.writeFile("extension.json", JSON.stringify(objeto));
console.log("Fichero creado correctamente");
const datosCreados = await fs.readFile ("extension.json", "utf-8");
console.log (datosCreados);
}
write();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TRY CATCH

write = async () => {

    try{
    await  fs.writeFile("extension.json", JSON.stringify(objeto));
    console.log("Fichero creado correctamente");
    const datosCreados = await fs.readFile ("extension.json", "utf-8");
    console.log (datosCreados);
    }
    catch (error){
        console.log ("Ha ocurrido un error")
    }
}

write();

            
        



