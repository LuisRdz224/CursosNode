const axios = require("axios");

class Busquedas{
    historial = ['Tegucigalpa','Madrid','San Jose'];

    constructor(){
        // TODO leer DB si existe
    }

    get paramsMapbox(){
        return {
            'access_token': 'pk.eyJ1Ijoic2NydWIyMjQiLCJhIjoiY2xkdGRoNXg0MjBtZzN3cWU2cGZ5dzF0ZyJ9.wLAPKsDEmuGPgsgpUIG28w',
            'limit': 5,
            'language': 'es'
        }
    }
    async ciudad(lugar =''){

        try {
            // peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox

            });

            const resp = await instance.get();
            console.log(resp.data);

            return []; //retornar los lugares

        } catch (error) {
            return [];
        }
    }
}

module.exports = {
    Busquedas
}