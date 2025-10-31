
const diccionarioEmpleado = {
  "nombre": { "dataType": "string" },
  "cargo": { "dataType": "string" },
  "fecha_contrato": { "dataType": "string" },
  "salario": { "dataType": "float" },
  "domicilio": { "dataType": "object" } 
};

let countString = 0;
let countObject = 0;

for (const campo in diccionarioEmpleado) {
  const tipo = diccionarioEmpleado[campo].dataType;

  if (tipo === 'string') {
    countString++;
  } else if (tipo === 'object') {
    countObject++;
  }
}

console.log("\n--- Reporte de Tipos de Datos ---");
console.log(`Total de campos de tipo 'string': ${countString}`);
console.log(`Total de campos de tipo 'object': ${countObject}`);