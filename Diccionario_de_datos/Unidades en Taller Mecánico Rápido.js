
const diccionarioTaller = {
  "kilometraje": {
    "dataType": "integer",
    "unit": "km", 
    "description": "Distancia total recorrida."
  }
};

const unidad = diccionarioTaller.kilometraje.unit; 
const pregunta = diccionarioTaller.kilometraje.description + ` (en ${unidad}):`;

const kilometraje = parseInt(prompt(pregunta), 10);

const registroTaller = {
    kilometraje: kilometraje
};

console.log("✅ Registro de Taller:", registroTaller);
console.log(`El sistema espera el dato en la unidad: ${unidad}.`);