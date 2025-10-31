const BaseDeDatos = {
    Cliente: { "id": { "dataType": "integer" }, "nombre": { "dataType": "string" } },
    Producto: { "codigo": { "dataType": "string" }, "stock": { "dataType": "integer" } },
    Transaccion: { "monto": { "dataType": "float" } }
};

function obtenerDiccionario(esquema, nombreEntidad) {
    if (esquema.hasOwnProperty(nombreEntidad)) {
        return esquema[nombreEntidad];
    }
    return null; 
}

const diccionarioProducto = obtenerDiccionario(BaseDeDatos, 'Producto');
const diccionarioTransaccion = obtenerDiccionario(BaseDeDatos, 'Transaccion');

console.log("\n Diccionario de 'Producto' extraído:");
console.log(diccionarioProducto);

console.log("\n Diccionario de 'Transaccion' extraído:");
console.log(diccionarioTransaccion);