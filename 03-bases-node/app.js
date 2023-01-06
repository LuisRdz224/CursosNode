//imprimir la tabla del 5
const fs = require('fs'); 

console.clear();
console.log("===============");
console.log("Tabla del 5:");
console.log("===============");

const num = 3;

let salida = "";


for (let index = 1; index <= 10; index++) {
    salida += `${num}x${index} = ${num*index}\n`
}

console.log(salida);

fs.writeFile(`tabla-${num}.txt`,salida,(err)=>{
    if(err){
        console.log("Error al guardar el archivo");
        throw err;
    }
    console.log("Archivo creado");
})