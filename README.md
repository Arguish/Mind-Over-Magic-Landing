# 🎮 Mind Over Magic - Landing Page

> Landing page moderna desarrollada con React y Tailwind CSS para presentar el juego de simulación Mind Over Magic.

---

## 📋 Descripción del Proyecto

Página web tipo "landing page" sencilla y moderna con React y Tailwind CSS, que muestra las secciones básicas de un sitio de presentación del juego **Mind Over Magic** - un juego de simulación de colonias donde construyes y optimizas una escuela de magia.

---

## 🧠 Tecnologías y Herramientas

-   **React + Vite** - Para crear el proyecto
-   **Tailwind CSS** - Para estilos y maquetación
-   **useState** - Para manejar cambios dinámicos (cambio de imagen, tarjeta activa)
-   **map()** - Para generar contenido repetitivo (imágenes, características, planes)

> ⚠️ **Nota:** No se emplean librerías externas ni hooks adicionales.

---

## ⚙️ Estructura General del Proyecto

El proyecto se estructura con dos archivos principales:

```
src/
├── App.jsx        # Contiene toda la estructura y funcionalidad
├── data.js        # Contiene los datos (arrays) que se recorren con map()
└── Assets/
    └── img/       # Imágenes del proyecto (entre 3 y 6)
```

---

## 🧱 Estructura de la Web

### 1. 📌 Encabezado (Header)

-   Logo del juego
-   Menú de navegación con 3 enlaces
-   Botón principal de acción
-   Diseño fijo o estático

### 2. 🎯 Sección Principal (Hero)

-   **Título llamativo** y subtítulo descriptivo
-   **Dos botones de acción** (Ver demo, Comprar ahora, etc.)
-   **Slideshow/carrusel** de imágenes (mínimo 3 fotos)
    -   Cambio de imagen controlado con `useState`
    -   Indicadores generados con `map()`

### 3. ⭐ Sección de Características (Features)

-   **Imagen/ilustración** a la izquierda
-   **Lista de 3-4 características** a la derecha
    -   Cada característica con título y texto corto
    -   Sistema de resaltado al hacer clic (usando `useState`)

### 4. 💎 Sección de Precios/Planes (Pricing)

-   **Cuatro tarjetas** con diferentes planes/niveles
    -   Generadas con `map()`
    -   Cada tarjeta muestra:
        -   Nombre del plan
        -   Precio
        -   Botón de acción
    -   Una tarjeta con estilo destacado

### 5. 🔗 Pie de Página (Footer)

-   Texto con derechos reservados
-   Enlaces simples (Términos, Privacidad, Contacto)

---

## 🖼️ Contenido y Diseño

### Temática

**Mind Over Magic** - Juego de simulación de escuela de magia desarrollado por Sparkypants y publicado por Klei Publishing.

### Assets

-   Imágenes ubicadas en `/src/Assets/img/`
-   Entre 3 y 6 imágenes relacionadas con el juego

### Personalización

-   ✅ Colores personalizables
-   ✅ Tipografía adaptable
-   ✅ Nombres de secciones configurables

---

## ✨ Criterios de Evaluación

Se valorará:

-   ✅ **Claridad visual** y consistencia del diseño
-   ✅ **Correcta estructura de Tailwind** (`grid`, `flex`, `gap`, `rounded`, `shadow`, etc.)
-   ✅ **Uso correcto** de `map()` y `useState`
-   ✅ **Responsive design**
-   ✅ **Interactividad** de los componentes

---

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

---

## 📝 Licencia

Proyecto educativo - Mind Over Magic © Sparkypants Studios & Klei Publishing

---

**Desarrollado con ❤️ usando React y Tailwind CSS**
