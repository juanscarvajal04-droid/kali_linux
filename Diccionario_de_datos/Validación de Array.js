const diccionarioMarca = {
  "nombre_marca": { "dataType": "string" },
  "colores_principales": { 
    "dataType": "array", 
    "min_elementos": 3 
  }
};

function validarLongitudVector(vectorDatos, metadata) {
  const min = metadata.min_elementos;
  
  if (vectorDatos.length < min) {
    console.log(`❌ Validación Fallida: Se requieren ${min} elementos, solo hay ${vectorDatos.length}.`);
    return false;
  }
  return true;
}

const coloresPrueba1 = ["Rojo", "Azul", "Blanco"]; 
const coloresPrueba2 = ["Negro", "Gris"];         

validarLongitudVector(coloresPrueba1, diccionarioMarca.colores_principales);
validarLongitudVector(coloresPrueba2, diccionarioMarca.colores_principales);