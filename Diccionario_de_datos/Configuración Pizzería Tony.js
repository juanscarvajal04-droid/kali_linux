
const diccionarioConfig = {
  "horario_cierre": {
    "dataType": "string",
    "description": "Hora de cierre del local."
  },
  "delivery_activo": {
    "dataType": "boolean",
    "description": "Servicio a domicilio activo (s/n)."
  }
};


const horaCierre = prompt(diccionarioConfig.horario_cierre.description);


const deliveryStr = prompt(diccionarioConfig.delivery_activo.description + " (escriba 's' o 'n')");
const deliveryActivo = (deliveryStr.toLowerCase() === 's'); 

const registroConfig = {
    horario_cierre: horaCierre,
    delivery_activo: deliveryActivo
};

console.log("Configuración registrada:", registroConfig);


console.log(`Dato: Delivery activo -> ${registroConfig.delivery_activo}`);
console.log(`Metadata: Tipo esperado -> ${diccionarioConfig.delivery_activo.dataType}`);