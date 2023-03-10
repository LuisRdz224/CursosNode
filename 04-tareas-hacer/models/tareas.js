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

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
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

    listarPendientesCompletadas (completadas = true){
        console.log();
        let index=0;
        this.listadoArray.forEach((tarea) =>{
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)?"Completado".green:"Pendiente".red
            if(estado === "Completado".green && completadas){
                    index++;
                    console.log(`${(index.toString()+ '.').green} ${desc} :: Completado el: ${completadoEn.green}`);
            }
            if(estado === "Pendiente".red && !completadas){
                    index++;
                    console.log(`${(index.toString()+ '.').green} ${desc} :: ${estado}`);
            }
        })


    }

    toggleCompletadas( ids =[]){
        ids.forEach( id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArray.forEach( tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;