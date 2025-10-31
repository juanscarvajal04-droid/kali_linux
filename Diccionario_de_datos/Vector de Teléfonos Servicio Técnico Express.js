
const diccionarioContacto = {
  "nombre_contacto": { "dataType": "string", "description": "Nombre del Contacto." },
  "telefonos_alternos": { 
    "dataType": "array", 
    "description": "Vector de teléfonos de contacto."
  }
};


const nombreCont = prompt(diccionarioContacto.nombre_contacto.description);
const preguntaTel = `Ingrese los ${diccionarioContacto.telefonos_alternos.description} (separados por punto y coma, ej: 551234; 555678):`;
const telStr = prompt(preguntaTel);


const telefonosArray = telStr.split(';').map(t => t.trim());

const registroContacto = {
    nombre_contacto: nombreCont,
    telefonos_alternos: telefonosArray
};

console.log(" Contacto registrado con vector de teléfonos:", registroContacto);
console.log(`El contacto tiene ${registroContacto.telefonos_alternos.length} teléfonos alternos.`);