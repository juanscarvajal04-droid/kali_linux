
const diccionarioFactura = {
  "id_factura": { "dataType": "string", "description": "ID de la Factura." },
  "fecha_emision": { 
    "dataType": "array", 
    "description": "Vector [DÍA, MES, AÑO]."
  }
};

const idFactura = prompt(diccionarioFactura.id_factura.description);

const dia = parseInt(prompt("DÍA de la emisión (ej: 15):"), 10);
const mes = parseInt(prompt("MES de la emisión (ej: 7):"), 10);
const anio = parseInt(prompt("AÑO de la emisión (ej: 2024):"), 10);

const registroFactura = {
    id_factura: idFactura,
   
    fecha_emision: [dia, mes, anio] 
};

console.log("Factura con fecha vectorial:", registroFactura);

console.log(`El año registrado (desde el vector) es: ${registroFactura.fecha_emision[2]}`);