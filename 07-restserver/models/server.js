const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.path = {
            authPath :'/api/auth',
            categoriasPath :'/api/categorias',
            usuariosPath :'/api/usuarios',
        }


        //Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();

    }

    async conectarDB(){
        await dbConnection();
    }


    middlewares(){

        //CORS
        this.app.use(cors());

        //lectura y Parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));

    }

    routes(){

        this.app.use(this.path.authPath,require('../routes/auth'));
        this.app.use(this.path.categoriasPath, require('../routes/categorias'))
        this.app.use(this.path.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto:', process.env.PORT);
        })
    }

}


module.exports = Server;