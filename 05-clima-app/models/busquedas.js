const axios = require("axios");

class Busquedas{
    historial = ['Tegucigalpa','Madrid','San Jose'];

    constructor(){
        // TODO leer DB si existe
    }
    async ciudad(lugar =''){

        try {
            // peticion http
            console.log('Ciudad',lugar);
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
        } catch (error) {
            return [];
        }
        return []; //retornar los lugares

    }
}

module.exports = {
    Busquedas
}