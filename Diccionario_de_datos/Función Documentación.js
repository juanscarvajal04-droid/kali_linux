const diccionarioCliente = {
  "id_cliente": { "dataType": "integer", "description": "Identificador único." },
  "puntos_fidelidad": { "dataType": "integer", "description": "Puntos acumulados." },
  "nombre": { "dataType": "string", "description": "Nombre del cliente." }
};

function obtenerMetadatos(dict) {
  let output = "DOCUMENTACIÓN DEL ESQUEMA:\n";

  for (const campo in dict) {
    const metadata = dict[campo];
    output += `\n- CAMPO: ${campo}\n`;
    output += `  Tipo: ${metadata.dataType}\n`;
    output += `  Descripción: ${metadata.description}\n`;
  }
  return output;
}

const docCliente = obtenerMetadatos(diccionarioCliente);
console.log(docCliente);