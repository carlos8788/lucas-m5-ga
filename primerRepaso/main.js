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


// Objetos

const contenedorObjetos = document.querySelector('.objetos')

let persona = {
    nombre: 'Lucas',
    apellido: 'Gonzalez',
    curso: 'JavaScript'
}

// Slice
let abecedario = ["a", "b", "c", "d", "e"];

let cortado = abecedario.slice(1, 2) //El primer toma el elemento según el indice
// y el segundo toma hasta el elemento del indice que recibe -1

let cortarSplice = abecedario.splice(3, 2) // devuelve la parte cortada del array

// contenedorObjetos.innerHTML = cortarSplice

// let claves = Object.keys(persona) // Me va a devolver todas las claves o propiedades de un objeto
// let valores = Object.values(persona) // Me va a devolver todas los valores de un objeto

// console.log(claves)
// console.log(valores)

// let p = document.createElement('p')
// p.textContent = claves

// let parrafo2 = document.createElement('p')
// parrafo2.textContent = valores
// contenedorObjetos.append(p)
// contenedorObjetos.append(parrafo2)

// Como acceder a los valores de un objeto

console.log(persona.nombre)
console.log(persona['nombre'])

// Object.keys(persona) es un array
Object.keys(persona).forEach(key => {
    let p = document.createElement('p')
    p.textContent = `${key.toUpperCase()}: ${persona[key]}`
    contenedorObjetos.append(p)
})


const contenedorLibros = document.querySelector('.libros')

let libros = [
    { 
        titulo: "la Piedra Filosofal", 
        autor: "J.K. Rowling", 
        paginas: 309 
    },
    { 
        titulo: "la Cámara Secreta", 
        autor: "J.K. Rowling", 
        paginas: 341 
    },
    { 
        titulo: "el Prisionero de Azkaban", 
        autor: "J.K. Rowling", 
        paginas: 435 
    },
    { 
        titulo: "el Cáliz de Fuego", 
        autor: "J.K. Rowling", 
        paginas: 636 
    },
    { 
        titulo: "la Orden del Fénix", 
        autor: "J.K. Rowling", 
        paginas: 766 
    }
]


libros.forEach(libro => {
    const li = document.createElement('li')
    li.textContent = `${libro.titulo}: ${libro.paginas}`
    contenedorLibros.append(li)
})


// Aplicando los mismos pasos para mostrar los libros de Harry Potter
// Ahora mostrar los equipos de sudamerica y mostrar cantidad de titulos
let equiposCopAmerica = [
    {
        nombre: "Argentina",
        confederacion: "CONMEBOL",
        titulos: 15
    },
    {
        nombre: "Brasil",
        confederacion: "CONMEBOL",
        titulos: 9
    },
    {
        nombre: "Uruguay",
        confederacion: "CONMEBOL",
        titulos: 15
    },
    {
        nombre: "Chile",
        confederacion: "CONMEBOL",
        titulos: 2
    },
    {
        nombre: "Colombia",
        confederacion: "CONMEBOL",
        titulos: 1
    },
    {
        nombre: "Paraguay",
        confederacion: "CONMEBOL",
        titulos: 2
    },
    {
        nombre: "Perú",
        confederacion: "CONMEBOL",
        titulos: 2
    },
    {
        nombre: "Bolivia",
        confederacion: "CONMEBOL",
        titulos: 1
    },
    {
        nombre: "Ecuador",
        confederacion: "CONMEBOL",
        titulos: 0
    },
    {
        nombre: "Venezuela",
        confederacion: "CONMEBOL",
        titulos: 0
    }
];