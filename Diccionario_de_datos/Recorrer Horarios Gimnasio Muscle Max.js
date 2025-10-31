
const diccionarioClase = {
  "nombre_clase": { "dataType": "string" },
  "horas_programadas": { "dataType": "array" } 
};

const registroClase = {
    nombre_clase: "Zumba",
    horas_programadas: ["09:00", "11:00", "17:30", "19:00"] 
};

console.log("\n--- Horarios Programados para " + registroClase.nombre_clase + " ---");

const horas = registroClase.horas_programadas;


for (let i = 0; i < horas.length; i++) {
  console.log(`Horario #${i + 1}: ${horas[i]}`);
}