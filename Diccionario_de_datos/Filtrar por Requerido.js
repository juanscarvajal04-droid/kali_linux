const diccionarioEmpleado = {
  "nombre": { "required": true, "dataType": "string" },
  "apellido": { "required": true, "dataType": "string" },
  "salario": { "required": true, "dataType": "float" },
  "telefono_opcional": { "required": false, "dataType": "string" },
  "fecha_nacimiento": { "required": true, "dataType": "array" }
};

const camposRequeridos = [];

for (const campo in diccionarioEmpleado) {
  if (diccionarioEmpleado[campo].required === true) {
    camposRequeridos.push(campo);
  }
}

console.log("\n--- Lista de Campos Requeridos (Metadata) ---");
console.log(camposRequeridos); 