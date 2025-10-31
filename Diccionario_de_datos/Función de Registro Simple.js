
const diccionarioProducto = {
  "nombre": { "description": "Nombre del producto." }
};


function registrarNombre(metadataCampo) {
  const pregunta = metadataCampo.description;
  const nombre = prompt(pregunta);
  
  return {
    "nombre": nombre,
    "fecha_registro": new Date().toLocaleDateString() 
  };
}

const nuevoProducto = registrarNombre(diccionarioProducto.nombre);

console.log("Nuevo producto registrado:");
console.log(nuevoProducto);