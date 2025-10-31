
const diccionarioFerreteria = {
  "codigo": {
    "dataType": "string",
    "required": true, 
    "description": "Código del producto (requerido)."
  },
  "nombre": {
    "dataType": "string",
    "required": true, 
    "description": "Nombre del artículo (requerido)."
  }
};


const codigoF = prompt(diccionarioFerreteria.codigo.description);
const nombreF = prompt(diccionarioFerreteria.nombre.description);

const registroFerreteria = {
    codigo: codigoF,
    nombre: nombreF
};


const esRequerido = diccionarioFerreteria.nombre.required;

if (esRequerido && nombreF === "") {
  console.log("ERROR: El campo 'nombre' está vacío y es OBLIGATORIO según el diccionario.");
} else if (esRequerido) {
  console.log("El campo 'nombre' se registró con éxito. (Regla: Requerido)");
}