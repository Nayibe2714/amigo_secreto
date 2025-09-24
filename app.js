// Lista para guardar los nombres de los participantes
let participantes = [];

// Función para agregar un nuevo participante
function agregarAmigo() {
    // Obtener el campo de texto
    const campoTexto = document.querySelector('#amigo');
    const nombre = campoTexto.value.trim(); // Eliminar espacios

    // Comprobar si el nombre está vacío
    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Verificar si el nombre ya existe
    if (participantes.some(participante => participante === nombre)) {
        alert('Este nombre ya fue añadido. Usa otro nombre.');
        campoTexto.value = '';
        return;
    }

    // Agregar el nombre a la lista
    participantes.push(nombre);
    
    // Vaciar el campo de texto
    campoTexto.value = '';
    
    // Refrescar la lista en la interfaz
    refrescarLista();
}

// Función para mostrar la lista de participantes
function refrescarLista() {
    // Obtener el contenedor de la lista
    const contenedorLista = document.querySelector('#listaAmigos');
    contenedorLista.innerHTML = ''; // Borrar contenido anterior

    // Crear elementos de lista para cada nombre
    participantes.forEach(nombre => {
        const elemento = document.createElement('li');
        elemento.textContent = nombre;
        contenedorLista.appendChild(elemento);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Comprobar si hay al menos dos participantes
    if (participantes.length < 2) {
        alert('Necesitas al menos 2 participantes para el sorteo.');
        return;
    }

    // Elegir un participante al azar
    const indice = Math.floor(Math.random() * participantes.length);
    const elegido = participantes[indice];

    // Mostrar el resultado del sorteo
    const contenedorResultado = document.querySelector('#resultado');
    contenedorResultado.innerHTML = `GENIAL! Amigo secreto: <b>${elegido}</b>`;
}
