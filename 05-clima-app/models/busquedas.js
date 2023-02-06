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
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Ottawa.json?proximity=ip&language=es&access_token=pk.eyJ1Ijoic2NydWIyMjQiLCJhIjoiY2xkdGRoNXg0MjBtZzN3cWU2cGZ5dzF0ZyJ9.wLAPKsDEmuGPgsgpUIG28w');
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