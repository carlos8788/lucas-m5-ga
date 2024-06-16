// let titulo = 'titulo'

// console.log(titulo.toUpperCase())

// Traemos el dato
let titulo = document.querySelector('h1')

// Procesamos el dato
titulo.textContent = 'TITULO'


// Objetos

const perra = {
    nombre: 'Sunny',
    raza: 'Bull Terrier',
    edad: '2 años',
    color: 'blanco'
}

const listaContenedora = document.querySelector('.lista-perro');

let contenido = ''

for (clave in perra) {
    contenido += `<li>${clave}: ${perra[clave]}</li>`
}

listaContenedora.innerHTML = contenido;

// Definición inicial del array de letras
let letras = ["a", "b", "c", "d", "e"];


// letras.forEach(elemento => {
//     console.log(elemento)
// })


let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// numeros.forEach(num => {
//     console.log(num)
// })

// Agregar elementos
numeros.push(9);

console.log(numeros);

// Eliminar un elemento
numeros.pop();
numeros.pop();
numeros.pop();
console.log(numeros);


const datos = numeros.join('-'); // unir los elementos del array con un caracter especial
console.log(datos);

// Funcion que retorna valor
function saludar(nombre) {
    return `hola, ${nombre}`;
}

// const saludo = saludar('Lucas');
// console.log(saludar('Lucas'));

// Funcion que no retorna valor, simplemente ejecuta un bloque de código
function saludo(nombre) {
    console.log(`hola, ${nombre}`)
}


const productos = [
    {
        id: 1,
        title: "azucar",
        price: 200
    },
    {
        id: 2,
        title: "manzana",
        price: 400
    },
    {
        id: 3,
        title: "gaseosa",
        price: 200
    },
    {
        id: 4,
        title: "pan",
        price: 450
    }
];


const contenedorProductos = document.querySelector('.lista-productos')

let contenidoProductos = '';

productos.forEach(elemento => {
    contenidoProductos += `<li>${elemento.title}</li>
                           <li>${elemento.price}</li>`;
})

contenedorProductos.innerHTML = contenidoProductos

import { getUsers } from "./controller/user.controller";