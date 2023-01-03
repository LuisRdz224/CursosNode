const deadpool = {
    nombre: 'Wade',
    apellido: 'Winton',
    poder: 'Regeneración',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder} `
    }
    
}

function imprimeHeroe({nombre, apellido, poder, edad=0}){

    console.log(nombre, apellido, poder, edad)
}

// imprimeHeroe(deadpool)

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0]
// const h2 = heroes[1]
// const h3 = heroes[2]

const [,,h3] = heroes
console.log(h3)