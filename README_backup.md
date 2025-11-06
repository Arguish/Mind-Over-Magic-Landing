Crear una página web tipo “landing page” sencilla y moderna con React y Tailwind CSS, que muestre las secciones básicas de un sitio de presentación de producto, servicio o aplicación.
El tema (por ejemplo: app de recetas, tienda de ropa, estudio de música, etc.) y las imágenes serán elegidos libremente por cada alumno.

🧠 Tecnologías y herramientas
React + Vite para crear el proyecto.

Tailwind CSS para los estilos y la maquetación.

Se usará useState para manejar cambios dinámicos (como el cambio de imagen o de tarjeta activa).

Se usará map() para generar contenido repetitivo (como las imágenes, características o planes de precios).

No se emplearán librerías externas ni hooks adicionales.

⚙️ Estructura general del proyecto
El proyecto se puede realizar con solo dos archivos principales:

App.jsx → contiene toda la estructura y funcionalidad.

data.js → contiene los datos (arrays) que se recorrerán con map().

La carpeta /assets/img incluirá las imágenes que el alumno elija (entre 3 y 6 imágenes en total).

🧱 Partes de la web

1. Encabezado (Header)
   Logo (propio o genérico).

Menú de navegación con 3 enlaces.

Botón principal (“Descargar”, “Entrar”, o según la temática).

Fijo o estático según preferencia.

2. Sección principal (Hero)
   Un título llamativo y un subtítulo o descripción breve.

Dos botones de acción (por ejemplo: “Ver demo”, “Comprar ahora”, etc.).

Un cuadro a la derecha con un slideshow o carrusel simple de imágenes (mínimo 3 fotos).

El cambio de imagen se controla con useState.

Los botones inferiores (indicadores) se generan con map().

3. Sección de características (Features)
   Imagen o ilustración a la izquierda.

Lista de 3 a 4 características a la derecha (cada una con título y texto corto).

Al hacer clic en una característica, se resalta o cambia el color (usando useState para controlar el elemento activo).

4. Sección de precios o planes (Pricing)
   Cuatro tarjetas con diferentes planes o niveles (por ejemplo: Básico, Pro, Premium, etc.).

Cada tarjeta se genera con map().

Deben mostrar: nombre del plan, precio y un botón de acción.

Una de las tarjetas debe tener un estilo destacado.

5. Pie de página (Footer)
   Texto con derechos reservados.

Enlaces simples (por ejemplo: “Términos”, “Privacidad”, “Contacto”).

🖼️ Contenido y diseño
Cada alumno elige su temática libremente (app, negocio, evento, videojuego, etc.).

Las imágenes (entre 3 y 6) deben estar dentro de /src/assets/img/.

Los colores, tipografía y nombres de secciones son personalizables.

Se valorará:

Claridad visual y consistencia del diseño.

Correcta estructura de Tailwind (grid, flex, gap, rounded, shadow, etc.).

Uso de map y useState correctamente implementados.
