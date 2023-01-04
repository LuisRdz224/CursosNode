const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Luis'
    },
    {
        id: 3,
        nombre: 'Eunice'
    },

];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },

]

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find((e) => e.id === id )

    if(empleado){
        return callback(null, empleado)
    }else{
        return callback(`Empleado con ID:${id} no existe`);
    }

}

getEmpleado(1,( err, empleado ) => {
    if(err){
        console.log("Error");
        return console.log(err);
    }
    console.log("Empleado existe");
    console.log(empleado);
})

// console.log(getEmpleado(10));