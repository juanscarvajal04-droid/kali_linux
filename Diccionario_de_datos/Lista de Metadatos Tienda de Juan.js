
const diccionarioProducto = {
  "codigo": { "dataType": "string", "required": true },
  "nombre": { "dataType": "string", "required": true },
  "precio": { "dataType": "float" },
  "stock": { "dataType": "integer" }
};

console.log("--- Listado de Metadatos (Diccionario) ---");


for (const campo in diccionarioProducto) {
  
  if (diccionarioProducto.hasOwnProperty(campo)) {
    const metadata = diccionarioProducto[campo];
    
    
    console.log(`Campo: ${campo} -> Tipo de Dato: ${metadata.dataType}`);
  }
}