/******************************************************
 * 1. SELECCIÓN DE ELEMENTOS
 ******************************************************/

// Seleccionamos el título
const titulo = document.getElementById('titulo');

// Párrafo de descripción
const descripcion = document.querySelector('.descripcion');

// Lista UL
const lista = document.querySelector('#lista');

// Todos los botones de la página
const botones = document.querySelectorAll('button');

// Mostramos en consola para comprobar
console.log(titulo, descripcion, lista, botones);



/******************************************************
 * 2. MANIPULACIÓN DE CONTENIDO
 ******************************************************/

// Cambiamos el texto del título
titulo.textContent = "Manipulación del DOM";

// Modificamos el contenido del párrafo (incluye HTML interpretado)
descripcion.innerHTML = "Este <strong>texto</strong> ha sido modificado mediante <em>innerHTML</em>.";

// Añadimos un atributo personalizado
descripcion.setAttribute('data-editado', 'true');

// Añadimos una clase CSS predefinida en el HTML
descripcion.classList.add('resaltado');



/******************************************************
 * 3. AGREGAR Y ELIMINAR ELEMENTOS
 ******************************************************/

// Botones de agregar / eliminar
const btnAgregar = document.getElementById('agregar');
const btnEliminar = document.getElementById('eliminar');

// Evento para agregar elementos a la lista
btnAgregar.addEventListener('click', () => {
  // Crear un nuevo <li>
  const li = document.createElement('li');
  li.textContent = `Elemento ${lista.children.length + 1}`;

  // Insertarlo al final de la lista
  lista.appendChild(li);
});

// Evento para eliminar el último elemento
btnEliminar.addEventListener('click', () => {
  // Si la lista tiene elementos, borra el último
  if (lista.lastElementChild) {
    lista.lastElementChild.remove();
  }
});



/******************************************************
 * 4. OPTIMIZACIÓN CON DocumentFragment (BONUS)
 ******************************************************/

// Ejemplo de cómo insertar muchos elementos sin reflows continuos
const fragmento = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
  const li = document.createElement('li');
  li.textContent = `Nuevo ${i}`;
  fragmento.appendChild(li);
}

// Inserta los 5 elementos de golpe (solo produce 1 reflow)
lista.appendChild(fragmento);



/******************************************************
 * 5. EVENTOS
 ******************************************************/

// Cambia el color del título al pasar el ratón
titulo.addEventListener('mouseenter', () => {
  titulo.style.color = 'red';
});

// Vuelve al color original al salir
titulo.addEventListener('mouseleave', () => {
  titulo.style.color = 'black';
});

// Cambia el contenido del párrafo al hacer clic
descripcion.addEventListener('click', () => {
  descripcion.textContent = "Has hecho clic en el párrafo.";
});



/******************************************************
 * 6. FORMULARIOS: LECTURA Y VALIDACIÓN
 ******************************************************/

// Seleccionamos el formulario
const form = document.getElementById('formulario');

// Escuchamos el evento submit
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita recargar la página

  // Obtener el valor del input "nombre"
  const nombre = form.nombre.value;

  // Validación sencilla
  if (nombre.trim() === "") {
    alert("El nombre no puede estar vacío.");
    return;
  }
  event.target.reset(); // Resetea el formulario
  alert(`Hola, ${nombre}!`);
});

// Mostrar FormData por consola
const datos = new FormData(form);
console.log([...datos.entries()]);



/******************************************************
 * FIN DEL SCRIPT
 ******************************************************/
