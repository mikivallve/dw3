// Para a hacer en clase con NodeList y clases.

/*

const light
const dark
const peach

*/

if (localStorage.getItem('modo') !== null) {
    document.querySelector('body').className = localStorage.getItem('modo');
}

const modos = document.querySelectorAll('.modo');
//console.log('Todos los modos: ',modos);

// Este forEach recorre la lista de elementos que capturamos en la constante "modos"
modos.forEach(function(cuadradito) {
    // Dentro de esta función, la variable "cuadradito" es uno de los elementos de "modos"
    // Estas líneas se repiten por cada (forEach) elemento.
    cuadradito.addEventListener('click', cambiaModo);
});

function cambiaModo(e) {
    // e es el evento que se originó (un click en este caso)
    // con console.log(e) puedo ver TODOS los atributos asociados a este evento.accordion
    // En particular, nos quedamos con el target (el elemento clickeado)
    // Dentro del target, accedemos a su id que puede ser: peach, dark o light según nuestro HTML
    const modoNuevo = e.target.id;

    // una vez obtenido ese id, se lo asginamos como clase al body. Ver estilos.css lineas 42 a la 57
    document.querySelector('body').className = modoNuevo;
    localStorage.setItem('modo', modoNuevo);
}
