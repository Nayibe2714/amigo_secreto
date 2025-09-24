Introducción

Amigo Secreto es una aplicación web desarrollada para el desafío de Alura, diseñada para facilitar la organización de sorteos de amigos secretos. Los usuarios pueden agregar nombres a una lista, evitando duplicados, y realizar un sorteo aleatorio para seleccionar un amigo secreto. La aplicación requiere al menos dos participantes para realizar el sorteo, asegurando una experiencia interactiva y divertida para eventos como intercambios de regalos.

Construida con HTML5, CSS3 y JavaScript, la aplicación ofrece un diseño responsivo, accesible y visualmente atractivo, utilizando fuentes de Google Fonts para una mejor experiencia de usuario.

Funcionalidades principales





Agregar nombres de participantes a una lista visible.



Validaciones para prevenir nombres vacíos o repetidos.



Sorteo aleatorio de un único amigo secreto, con un requisito mínimo de dos participantes.



Interfaz clara con estilos modernos y personalizados.



Alertas informativas para errores, como intentar sortear con menos de dos nombres.

Tecnologías empleadas





HTML5: Define la estructura de la página web.



CSS3: Proporciona estilos personalizados con variables CSS y un diseño adaptable.



JavaScript: Implementa la lógica para gestionar la lista de nombres y el sorteo.



Google Fonts: Utiliza las fuentes Inter y Merriweather para un diseño elegante.

Requisitos previos

No se necesitan herramientas adicionales ni dependencias externas, ya que el proyecto es completamente frontend y funciona en cualquier navegador moderno.

Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:





Clonar el repositorio:

git clone https://github.com/Nayibe2714/amigo_secreto



Acceder al directorio del proyecto:

cd Amigo_secreto



Abrir la aplicación:





Abre el archivo index.html directamente en un navegador web (como Chrome o Firefox) haciendo doble clic.



No se requiere instalación de paquetes, ya que el proyecto es autónomo.



para acceder y ver el proyecto vea https://nayibe2714.github.io/amigo_secreto/


Estructura del proyecto

Amigo_secreto/
├── assets/
│   ├── amigo-secreto.png       # Imagen principal del banner
│   └── play_circle_outline.png # Ícono para el botón de sorteo
├── index.html                  # Archivo principal con la estructura HTML
├── style.css                   # Estilos personalizados de la aplicación
└── app.js                      # Lógica JavaScript para la funcionalidad

Instrucciones de uso





Agregar participantes:





Ingresa un nombre en el campo de texto.



Presiona el botón Añadir para agregar el nombre a la lista.



Los nombres aparecerán en una lista debajo del campo de entrada.



Si el nombre está vacío o ya existe, se mostrará una alerta.



Realizar el sorteo:





Con al menos dos participantes en la lista, haz clic en Sortear amigo.



El nombre del amigo secreto seleccionado aparecerá en la sección de resultados.



Si hay menos de dos participantes, aparecerá una alerta: "Necesitas al menos 2 participantes para el sorteo."

Solución de problemas





El botón "Añadir" no responde:





Verifica que app.js esté correctamente vinculado en index.html con <script src="app.js" defer></script>.



Revisa la consola del navegador (F12, pestaña "Console") para detectar errores de JavaScript.



El sorteo no funciona:





Asegúrate de que haya al menos dos nombres en la lista.



Consulta la consola del navegador para posibles errores.



Las imágenes no se muestran:





Confirma que amigo-secreto.png y play_circle_outline.png estén en la carpeta assets/.



Errores con Git:





Si tienes problemas al subir cambios, verifica que el repositorio esté inicializado (git init), los archivos estén añadidos (git add .), comprometidos (git commit -m "mensaje") y el remoto configurado (git remote add origin https://github