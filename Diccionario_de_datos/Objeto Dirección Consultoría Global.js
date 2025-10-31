
const diccionarioEmpleado = {
  "nombre": { "dataType": "string", "description": "Nombre completo." },
  "domicilio": {
    "dataType": "object", 
    "description": "Información de residencia.",
    "fields": { 
      "calle": { "description": "Calle y número." },
      "colonia": { "description": "Colonia o barrio." },
      "codigo_postal": { "description": "Código Postal." }
    }
  }
};


const nombreEmpleado = prompt(diccionarioEmpleado.nombre.description);
alert("A continuación, ingrese el domicilio.");


const calle = prompt(diccionarioEmpleado.domicilio.fields.calle.description);
const colonia = prompt(diccionarioEmpleado.domicilio.fields.colonia.description);
const cp = prompt(diccionarioEmpleado.domicilio.fields.codigo_postal.description);

const registroEmpleado = {
    nombre: nombreEmpleado,

    domicilio: { 
        calle: calle,
        colonia: colonia,
        codigo_postal: cp 
    }
};

console.log("Empleado con dirección anidada:", registroEmpleado);