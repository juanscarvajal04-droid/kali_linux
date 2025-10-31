
const diccionarioClase = {
  "nombre_clase": { "dataType": "string", "description": "Nombre de la clase (Ej: Yoga)." },
  "horas_programadas": { 
    "dataType": "array", 
    "description": "Horas programadas (Separadas por coma)."
  }
};


const nombreClase = prompt(diccionarioClase.nombre_clase.description);
const pregunta = `Ingrese las ${diccionarioClase.horas_programadas.description} (ej: 08:00, 10:30, 19:00):`;
const horasStr = prompt(pregunta);


const horasArray = horasStr.split(',').map(h => h.trim());

const registroClase = {
    nombre_clase: nombreClase,
    horas_programadas: horasArray 
};

console.log("Clase registrada con vector de horas:", registroClase);