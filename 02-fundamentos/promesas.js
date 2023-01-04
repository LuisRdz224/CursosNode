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

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;
        (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);

    });
}

const getSalario = (id) => {
    return new Promise ((res,rej) => {
        const salario = salarios.find((e) => e.id === id)?.salario;
        (salario)?res(salario):rej(`No existe un salario para el empleado ${id}`);
    });
}

const id = 4;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));