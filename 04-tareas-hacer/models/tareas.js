const Tarea = require('./tarea');

class Tareas{
    _listado = {};
    get listadoArray(){
        const listado = []
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado
    }
    constructor () {
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea=>{
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        //Completada: verde
        //Pendiente: rojo
        console.log();
        this.listadoArray.forEach((tarea,i) =>{
            const idx = `${i + 1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)?'Completado'.green:"Pendiente".red
            console.log(`${idx}. ${desc} :: ${estado}`);
        })
        //1. Cafe :: Completada | Pendiente
        //2. Curso :: Completado | Pendiente
    }
}

module.exports = Tareas;