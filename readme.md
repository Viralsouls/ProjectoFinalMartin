# ✈️ Reserva de Vuelos - Simulación en JavaScript

## 📌 Descripción del Proyecto
Este proyecto simula un sistema de reserva de vuelos utilizando **JavaScript, AJAX, JSON, y almacenamiento local**.

## 🎯 Funcionalidades
- **Seleccionar Destino**: Los destinos se cargan dinámicamente desde un archivo `destinations.json`.
- **Calcular Precio**: Los precios de los vuelos se obtienen del archivo `flights.json`.
- **Persistencia de Datos**: Los datos de las reservas se guardan en `localStorage`.
- **Filtrar por Destino**: Permite filtrar las reservas por destino.
- **Ordenar Reservas**: Permite ordenar las reservas por fecha o por cantidad de tiquetes.
- **Eliminar Reserva**: Permite eliminar una reserva existente.
- **Editar Reserva**: Permite editar una reserva existente.
- **Botón "Go to Top"**: Un botón que permite volver al inicio de la página.
- **Interfaz de Usuario Mejorada**: Diseño moderno y atractivo con mejor experiencia de usuario.

## 🛠️ Tecnologías Utilizadas
- HTML, CSS
- JavaScript (ES6)
- Fetch API (AJAX)
- JSON
- LocalStorage

## 📂 Estructura del Proyecto
- `index.html`: Archivo principal de la interfaz de usuario.
- `css/styles.css`: Estilos CSS para el diseño de la página.
- `scripts/app.js`: Lógica principal de la aplicación.
- `scripts/dom.js`: Manipulación del DOM.
- `scripts/api.js`: Funciones para obtener datos de archivos JSON.
- `scripts/bookings.js`: Funciones para gestionar las reservas.
- `scripts/filters.js`: Funciones para filtrar y ordenar reservas.
- `scripts/storage.js`: Funciones para cargar y guardar datos en `localStorage`.
- `scripts/utils.js`: Funciones de validación.
- `destinations.json`: Archivo JSON con la lista de destinos.
- `flights.json`: Archivo JSON con los precios de los vuelos.

## 🚀 Cómo Ejecutar el Proyecto
1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.
3. ¡Comienza a reservar tus vuelos!