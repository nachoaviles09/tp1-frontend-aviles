# TP1 Frontend — Ficha 4: Gimnasio

Implementación del frontend en **HTML5, CSS3 y JavaScript (ES6+)** correspondiente al dominio **Ficha 4: Gimnasio** del Trabajo Práctico 1 de la carrera **Programador y Diseñador Web Profesional (IAC Paraná)**.

- **Estudiante:** Ignacio Avilés
- **Repositorio:** [`nachoaviles09/tp1-frontend-aviles`](https://github.com/nachoaviles09/tp1-frontend-aviles)
- **Demo en vivo (GitHub Pages):** [`https://nachoaviles09.github.io/tp1-frontend-aviles/`](https://nachoaviles09.github.io/tp1-frontend-aviles/)

---

## Descripción del dominio y alcance

El sistema modela la interfaz de gestión de un gimnasio que administra **socios**, **entrenadores** y las **clases grupales** dictadas por cada entrenador, controlando el cupo máximo disponible en cada actividad.

### Criterios técnicos aplicados
- **Consistencia de nombres para el TP2:** Todos los identificadores y propiedades de los objetos en JavaScript (`clase_grupal_id`, `entrenador_id`, `socio_id`, `cupoMaximo`, `numeroSocio`, `dia`, etc.) respetan exactamente la nomenclatura del diagrama UML (sin tildes ni eñes: `miercoles`, `sabado`) para garantizar la integración directa con el backend en PHP durante el TP2.
- **Separación de responsabilidades:** Siguiendo las especificaciones de la consigna, la regla de negocio (`hayCupo()`, `cuposDisponibles()`, `inscribir()`) no se implementa en JavaScript, quedando reservada exclusivamente al servidor.
- **Modularización:** Los datos iniciales (`js/datos.js`) están separados de la lógica de renderizado, filtrado y validación (`js/app.js`) para facilitar la futura conexión con una API o backend PHP.

---

## Estructura del proyecto

```text
tp1-frontend-aviles/
├── index.html          # Estructura semántica: tablas, filtros y formulario de alta
├── css/
│   └── estilos.css     # Estilos responsivos, grillas, tablas, badges y alertas
├── js/
│   ├── datos.js        # Arreglos iniciales con 8 registros por entidad
│   └── app.js          # Lógica de renderizado, filtros combinados y validaciones
└── README.md           # Documentación del proyecto
