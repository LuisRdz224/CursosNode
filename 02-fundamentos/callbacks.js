// setTimeout(() => {
//     console.log("Hola Mundo");
// }, 1000);

const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Luis'
    }

    setTimeout(()=>{
        callback(user);
    },1000)
}

getUserById(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})

//Observaciones de los callbacks

// Para este caso se requirio de declarar un callback con los parametros de id y la funcion callback (linea 5)
// En la linea 6 se declaro un objeto llamado user el cual contiene un id y un nombre
// Ahora en la linea 11 existe otro callback llamado setTimeOut, el cual recibe como paremaetro una funcion (handler) y el tiempo en ms. Por lo que aquí se 
//      manda a llamar la función de callback con el objeto de usuario ( { id: 10 , nombre: 'Luis' } )
// Como ultimo, se manda a llamar el callback getUserById y se le asigna el parametro id = 10, y se manda a llamar la funcion callback con un arrow function
//      como se puede observar, se llama bajo el nombre de usuario, por lo que usuario contiene el id y el nombre. Lo que ahora queda es acceder a sus valores por separado