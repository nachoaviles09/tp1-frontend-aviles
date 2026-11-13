// Referencias al DOM
const tablaClases = document.getElementById("tabla-clases");
const tablaEntrenadores = document.getElementById("tabla-entrenadores");

const buscadorClase = document.getElementById("buscador-clase");
const filtroDia = document.getElementById("filtro-dia");
const filtroCupo = document.getElementById("filtro-cupo");
const filtroEspecialidad = document.getElementById("filtro-especialidad");

const formClase = document.getElementById("form-clase");
const selectEntrenadorForm = document.getElementById("entrenador-clase");
const mensajeForm = document.getElementById("mensaje-form");

// Resuelve el nombre completo del entrenador a partir de entrenador_id
function obtenerNombreEntrenador(entrenadorId) {
  const entrenador = entrenadores.find(
    (item) => item.entrenador_id === entrenadorId
  );
  if (!entrenador) {
    return "Sin asignar";
  }
  return `${entrenador.nombre} ${entrenador.apellido}`;
}

// Renderiza la tabla de ClaseGrupal aplicando búsqueda y filtros combinados
function renderizarClases() {
  const textoBusqueda = buscadorClase.value.trim().toLowerCase();
  const diaSeleccionado = filtroDia.value;
  const soloConCupo = filtroCupo.checked;

  const clasesFiltradas = clasesGrupales.filter((clase) => {
    const coincideNombre = clase.nombre.toLowerCase().includes(textoBusqueda);
    const coincideDia = diaSeleccionado === "" || clase.dia === diaSeleccionado;
    const coincideCupo = !soloConCupo || clase.inscriptos < clase.cupoMaximo;

    return coincideNombre && coincideDia && coincideCupo;
  });

  if (clasesFiltradas.length === 0) {
    tablaClases.innerHTML = `
      <tr>
        <td colspan="6" class="vacio">No se encontraron clases grupales con los filtros seleccionados.</td>
      </tr>
    `;
    return;
  }

  tablaClases.innerHTML = clasesFiltradas
    .map((clase) => {
      const disponible = clase.inscriptos < clase.cupoMaximo;
      const badge = disponible
        ? `<span class="badge badge-ok">Con cupo</span>`
        : `<span class="badge badge-lleno">Completo</span>`;

      return `
        <tr>
          <td>${clase.clase_grupal_id}</td>
          <td>${clase.nombre}</td>
          <td>${clase.dia}</td>
          <td>${obtenerNombreEntrenador(clase.entrenador_id)}</td>
          <td>${clase.inscriptos} / ${clase.cupoMaximo}</td>
          <td>${badge}</td>
        </tr>
      `;
    })
    .join("");
}

// Renderiza la tabla de Entrenador aplicando el filtro por especialidad
function renderizarEntrenadores() {
  const especialidadSeleccionada = filtroEspecialidad.value;

  const entrenadoresFiltrados = entrenadores.filter((entrenador) => {
    return (
      especialidadSeleccionada === "" ||
      entrenador.especialidad === especialidadSeleccionada
    );
  });

  if (entrenadoresFiltrados.length === 0) {
    tablaEntrenadores.innerHTML = `
      <tr>
        <td colspan="5" class="vacio">No hay entrenadores para esa especialidad.</td>
      </tr>
    `;
    return;
  }

  tablaEntrenadores.innerHTML = entrenadoresFiltrados
    .map(
      (entrenador) => `
      <tr>
        <td>${entrenador.entrenador_id}</td>
        <td>${entrenador.nombre} ${entrenador.apellido}</td>
        <td>${entrenador.especialidad}</td>
        <td>${entrenador.matricula}</td>
        <td>${entrenador.email}</td>
      </tr>
    `
    )
    .join("");
}

// Carga opciones dinámicas en los selectores de entrenador y especialidad
function inicializarSelectores() {
  // Opciones de entrenadores en el formulario de alta
  selectEntrenadorForm.innerHTML = entrenadores
    .map(
      (entrenador) => `
      <option value="${entrenador.entrenador_id}">
        ${entrenador.nombre} ${entrenador.apellido} (${entrenador.especialidad})
      </option>
    `
    )
    .join("");

  // Especialidades únicas en el filtro de entrenadores
  const especialidadesUnicas = [
    ...new Set(entrenadores.map((entrenador) => entrenador.especialidad))
  ];

  especialidadesUnicas.forEach((especialidad) => {
    const option = document.createElement("option");
    option.value = especialidad;
    option.textContent = especialidad;
    filtroEspecialidad.appendChild(option);
  });
}

function mostrarMensaje(texto, tipo) {
  mensajeForm.textContent = texto;
  mensajeForm.className = `alerta ${
    tipo === "error" ? "alerta-error" : "alerta-ok"
  }`;
}

// Validación del formulario de alta de ClaseGrupal
function validarClaseGrupal(nombre, dia, cupoMaximo, inscriptos, entrenadorId) {
  const diasValidos = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

  if (nombre === "") {
    return "El nombre de la clase no puede estar vacío.";
  }

  if (!diasValidos.includes(dia)) {
    return "El día debe ser de lunes a sabado (sin tilde).";
  }

  if (!Number.isInteger(cupoMaximo) || cupoMaximo < 1 || cupoMaximo > 50) {
    return "El cupo máximo debe ser un entero entre 1 y 50.";
  }

  if (!Number.isInteger(inscriptos) || inscriptos < 0 || inscriptos > cupoMaximo) {
    return `Los inscriptos deben ser un entero entre 0 y ${cupoMaximo}.`;
  }

  const existeEntrenador = entrenadores.some(
    (entrenador) => entrenador.entrenador_id === entrenadorId
  );
  if (!existeEntrenador) {
    return "Debe seleccionar un entrenador válido.";
  }

  return null;
}

// Manejo del alta de ClaseGrupal
formClase.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombre-clase").value.trim();
  const dia = document.getElementById("dia-clase").value.trim().toLowerCase();
  const cupoMaximo = Number(document.getElementById("cupo-maximo").value);
  const inscriptos = Number(document.getElementById("inscriptos-clase").value);
  const entrenadorId = Number(selectEntrenadorForm.value);

  const error = validarClaseGrupal(
    nombre,
    dia,
    cupoMaximo,
    inscriptos,
    entrenadorId
  );

  if (error !== null) {
    mostrarMensaje(error, "error");
    return;
  }

  const nuevoId =
    clasesGrupales.length > 0
      ? Math.max(...clasesGrupales.map((c) => c.clase_grupal_id)) + 1
      : 1;

  const nuevaClase = {
    clase_grupal_id: nuevoId,
    nombre: nombre,
    dia: dia,
    cupoMaximo: cupoMaximo,
    inscriptos: inscriptos,
    entrenador_id: entrenadorId
  };

  clasesGrupales.push(nuevaClase);
  renderizarClases();
  formClase.reset();
  mostrarMensaje(`Clase "${nombre}" agregada correctamente.`, "ok");
});

// Eventos de búsqueda y filtros en tiempo real
buscadorClase.addEventListener("input", renderizarClases);
filtroDia.addEventListener("change", renderizarClases);
filtroCupo.addEventListener("change", renderizarClases);
filtroEspecialidad.addEventListener("change", renderizarEntrenadores);

// Inicialización al cargar la página
inicializarSelectores();
renderizarClases();
renderizarEntrenadores();