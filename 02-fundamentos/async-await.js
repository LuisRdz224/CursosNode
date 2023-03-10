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

const id = 3;


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

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}`;
    } catch (error) {
        throw error;
    }

}



getInfoUsuario(id)
    .then(msg => {
        console.log("Todo salio bien");
        console.log(msg)})
    .catch(err => {
        console.log("Todo salio mal");
        console.log(err)});
