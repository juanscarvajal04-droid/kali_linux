
const diccionarioCliente = {
  "id_cliente": {
    "dataType": "integer",
    "description": "Identificador único del cliente."
  },
  "puntos_fidelidad": {
    "dataType": "integer",
    "description": "Puntos acumulados para descuentos."
  }
};


const idCliente = parseInt(prompt(diccionarioCliente.id_cliente.description), 10);
const puntos = parseInt(prompt(diccionarioCliente.puntos_fidelidad.description), 10);

const registroCliente = {
    id_cliente: idCliente,
    puntos_fidelidad: puntos
};

console.log(" Cliente registrado:", registroCliente);


const tipoPuntos = diccionarioCliente.puntos_fidelidad.dataType;
console.log(`Metadata: El tipo de dato para 'puntos_fidelidad' es: ${tipoPuntos}`); 
console.log(`Dato Registrado: El cliente tiene ${registroCliente.puntos_fidelidad} puntos.`);