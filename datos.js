// Arreglo de Entrenadores (8 registros)
const entrenadores = [
  {
    entrenador_id: 1,
    nombre: "Martin",
    apellido: "Gomez",
    email: "martin.gomez@gym.com",
    especialidad: "Funcional",
    matricula: "MAT-1042"
  },
  {
    entrenador_id: 2,
    nombre: "Laura",
    apellido: "Fernandez",
    email: "laura.fernandez@gym.com",
    especialidad: "Spinning",
    matricula: "MAT-2089"
  },
  {
    entrenador_id: 3,
    nombre: "Diego",
    apellido: "Peralta",
    email: "diego.peralta@gym.com",
    especialidad: "CrossFit",
    matricula: "MAT-3150"
  },
  {
    entrenador_id: 4,
    nombre: "Valentina",
    apellido: "Sosa",
    email: "valentina.sosa@gym.com",
    especialidad: "Yoga",
    matricula: "MAT-4012"
  },
  {
    entrenador_id: 5,
    nombre: "Federico",
    apellido: "Ruiz",
    email: "federico.ruiz@gym.com",
    especialidad: "Musculacion",
    matricula: "MAT-5118"
  },
  {
    entrenador_id: 6,
    nombre: "Carolina",
    apellido: "Duarte",
    email: "carolina.duarte@gym.com",
    especialidad: "Spinning",
    matricula: "MAT-6204"
  },
  {
    entrenador_id: 7,
    nombre: "Matias",
    apellido: "Benitez",
    email: "matias.benitez@gym.com",
    especialidad: "CrossFit",
    matricula: "MAT-7331"
  },
  {
    entrenador_id: 8,
    nombre: "Julieta",
    apellido: "Navarro",
    email: "julieta.navarro@gym.com",
    especialidad: "Funcional",
    matricula: "MAT-8409"
  }
];

// Arreglo de Socios (8 registros)
const socios = [
  {
    socio_id: 1,
    nombre: "Camila",
    apellido: "Rios",
    email: "camila.rios@mail.com",
    numeroSocio: 1001,
    plan: "mensual"
  },
  {
    socio_id: 2,
    nombre: "Lucas",
    apellido: "Mendez",
    email: "lucas.mendez@mail.com",
    numeroSocio: 1002,
    plan: "trimestral"
  },
  {
    socio_id: 3,
    nombre: "Sofia",
    apellido: "Acosta",
    email: "sofia.acosta@mail.com",
    numeroSocio: 1003,
    plan: "anual"
  },
  {
    socio_id: 4,
    nombre: "Tomas",
    apellido: "Herrera",
    email: "tomas.herrera@mail.com",
    numeroSocio: 1004,
    plan: "mensual"
  },
  {
    socio_id: 5,
    nombre: "Agustina",
    apellido: "Vega",
    email: "agustina.vega@mail.com",
    numeroSocio: 1005,
    plan: "anual"
  },
  {
    socio_id: 6,
    nombre: "Nicolas",
    apellido: "Ortiz",
    email: "nicolas.ortiz@mail.com",
    numeroSocio: 1006,
    plan: "trimestral"
  },
  {
    socio_id: 7,
    nombre: "Florencia",
    apellido: "Cabrera",
    email: "florencia.cabrera@mail.com",
    numeroSocio: 1007,
    plan: "mensual"
  },
  {
    socio_id: 8,
    nombre: "Franco",
    apellido: "Moreno",
    email: "franco.moreno@mail.com",
    numeroSocio: 1008,
    plan: "anual"
  }
];

// Arreglo de Clases Grupales (8 registros - incluye casos completos y con cupo)
const clasesGrupales = [
  {
    clase_grupal_id: 1,
    nombre: "CrossFit Intenso",
    dia: "lunes",
    cupoMaximo: 20,
    inscriptos: 20,
    entrenador_id: 3
  },
  {
    clase_grupal_id: 2,
    nombre: "Spinning Nocturno",
    dia: "miercoles",
    cupoMaximo: 15,
    inscriptos: 12,
    entrenador_id: 2
  },
  {
    clase_grupal_id: 3,
    nombre: "Funcional Full Body",
    dia: "viernes",
    cupoMaximo: 25,
    inscriptos: 18,
    entrenador_id: 1
  },
  {
    clase_grupal_id: 4,
    nombre: "HIIT Sabatino",
    dia: "sabado",
    cupoMaximo: 12,
    inscriptos: 12,
    entrenador_id: 8
  },
  {
    clase_grupal_id: 5,
    nombre: "Yoga y Movilidad",
    dia: "martes",
    cupoMaximo: 18,
    inscriptos: 10,
    entrenador_id: 4
  },
  {
    clase_grupal_id: 6,
    nombre: "Fuerza y Potencia",
    dia: "jueves",
    cupoMaximo: 16,
    inscriptos: 14,
    entrenador_id: 5
  },
  {
    clase_grupal_id: 7,
    nombre: "Indoor Cycle Express",
    dia: "lunes",
    cupoMaximo: 20,
    inscriptos: 9,
    entrenador_id: 6
  },
  {
    clase_grupal_id: 8,
    nombre: "WOD Sabado",
    dia: "sabado",
    cupoMaximo: 15,
    inscriptos: 11,
    entrenador_id: 7
  }
];