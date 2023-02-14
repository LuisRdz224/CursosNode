const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';


        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();

    }


    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'))
        this.app.use(cors());
    }

    routes(){

        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto:', process.env.PORT);
        })
    }

}


module.exports = Server;