# TP1 Frontend — Ficha 4: Gimnasio

Implementación del frontend en **HTML5, CSS3 y JavaScript (ES6+)** correspondiente al dominio **Ficha 4: Gimnasio** del Trabajo Práctico 1 de la carrera **Programador y Diseñador Web Profesional (IAC Paraná)**.

- **Estudiante:** Ignacio Andrés Avilés Peltzer
- **Repositorio:** [`nachoaviles09/tp1-frontend-aviles`](https://github.com/nachoaviles09/tp1-frontend-aviles)
- **Demo en vivo (GitHub Pages):** [`https://nachoaviles09.github.io/tp1-frontend-aviles/`](https://nachoaviles09.github.io/tp1-frontend-aviles/)

---

## Descripción del dominio y alcance

El sistema modela la interfaz de gestión de un gimnasio que administra **socios**, **entrenadores** y las **clases grupales** dictadas por cada entrenador, controlando el cupo máximo disponible en cada actividad.

### Criterios técnicos aplicados
- **Consistencia de nombres para el TP2:** Todos los identificadores y propiedades de los objetos en JavaScript (`clase_grupal_id`, `entrenador_id`, `socio_id`, `cupoMaximo`, `numeroSocio`, `dia`, etc.) respetan exactamente la nomenclatura del diagrama UML (sin tildes ni eñes: `miercoles`, `sabado`) para garantizar la integración directa con el backend en PHP durante el TP2.
- **Separación de responsabilidades:** Siguiendo las especificaciones de la consigna, la regla de negocio (`hayCupo()`, `cuposDisponibles()`, `inscribir()`) no se implementa en JavaScript, quedando reservada exclusivamente al servidor.
- **Modularización:** Los datos iniciales (`js/datos.js`) están separados de la lógica de renderizado, filtrado y validación (`js/app.js`) para facilitar la futura conexión con el backend PHP.

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
```

---

## Modelo de datos iniciales (`js/datos.js`)

El archivo `js/datos.js` define tres arreglos constantes de objetos literales planos con **8 registros por entidad**, preparados para probar todos los escenarios de búsqueda y filtrado:

- **`entrenadores`:** 8 registros con `entrenador_id`, `nombre`, `apellido`, `email`, `especialidad` y `matricula`.
- **`socios`:** 8 registros con `socio_id`, `nombre`, `apellido`, `email`, `numeroSocio` y `plan` (`mensual`, `trimestral` o `anual`).
- **`clasesGrupales`:** 8 registros con `clase_grupal_id`, `nombre`, `dia`, `cupoMaximo`, `inscriptos` y `entrenador_id` (incluyendo clases con cupo disponible y clases completas como `20/20` y `12/12`).

---

## Funcionalidades implementadas (`index.html` y `js/app.js`)

### 1. Listado y filtros combinados de `ClaseGrupal`
- **Resolución del entrenador:** Mediante `obtenerNombreEntrenador(entrenadorId)`, se busca el profesor correspondiente en el arreglo `entrenadores` usando `.find()` para mostrar su nombre y apellido en lugar del ID numérico.
- **Indicador visual de disponibilidad:** Muestra etiquetas dinámicas (`Con cupo` en verde o `Completo` en rojo) según la relación `inscriptos < cupoMaximo`.
- **Filtros combinados en tiempo real:** Dentro de `renderizarClases()` se aplica un único `.filter()` que evalúa simultáneamente:
  - Búsqueda parcial por nombre (insensible a mayúsculas, evento `input`).
  - Filtro por día de `lunes` a `sabado` (evento `change`).
  - Casilla *"Solo con cupo disponible"* (evento `change`).

### 2. Formulario de alta de `ClaseGrupal` con validación
- **Cálculo automático del ID:** El formulario no solicita el `clase_grupal_id` al usuario; al validar los datos, JavaScript calcula el siguiente identificador incremental con `Math.max(...clasesGrupales.map(c => c.clase_grupal_id)) + 1`.
- **Validaciones en cliente (`validarClaseGrupal`):** Desactiva la validación nativa mediante `novalidate` para mostrar alertas personalizadas ante cualquier error:
  - `nombre` obligatorio (no vacío tras `.trim()`).
  - `dia` válido de `lunes` a `sabado` (sin tilde).
  - `cupoMaximo` entero exacto (`Number.isInteger`) entre `1` y `50`.
  - `inscriptos` entero exacto entre `0` y `cupoMaximo`.
  - `entrenador_id` existente dentro del catálogo de entrenadores (`.some()`).
- **Actualización en memoria:** Agrega la nueva clase con `.push()`, vuelve a renderizar la tabla manteniendo los filtros activos y limpia el formulario con `.reset()`.

### 3. Listado y filtro de `Entrenador`
- **Selector dinámico de especialidades:** Carga automáticamente las especialidades sin duplicados utilizando `[...new Set(entrenadores.map(e => e.especialidad))]`.
- **Filtrado instantáneo:** Permite visualizar todos los entrenadores o filtrar por una disciplina puntual.

---

## Ejecución y visualización

### Opción 1: Demo en línea (GitHub Pages)
Ingresar directamente desde cualquier navegador a:
- `https://nachoaviles09.github.io/tp1-frontend-aviles/`

### Opción 2: Ejecución en local
1. Clonar o descargar el repositorio `tp1-frontend-aviles`.
2. Abrir el archivo `index.html` directamente en el navegador (o levantarlo con la extensión **Live Server** en Visual Studio Code).
