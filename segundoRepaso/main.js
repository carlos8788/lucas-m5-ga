const form = document.querySelector('form');
const contenedor = document.querySelector('.contenedor');

form.addEventListener('submit', function(event){
    event.preventDefault(); //Prevenimos el comportamiento del form
    const data = Object.fromEntries(new FormData(event.target)) // Convertimos a un objeto la informacion
    
    // console.log(data) // Procesamos la informacion

    // Primero vamos a crear un DIV
    const div = document.createElement('div');
    div.textContent = `${data.pais}➡️ GRUPO:${data.grupo}`
    contenedor.append(div)
})