const dictCliente = { "id": { "dataType": "integer" }, "nombre": { "dataType": "string" } };
const dictProducto = { "codigo": { "dataType": "string" }, "stock": { "dataType": "integer" } };

const BaseDeDatos = {
    Cliente: dictCliente,   
    Producto: dictProducto, 
    Transaccion: { "monto": { "dataType": "float" } }
};

console.log(" Estructura de Base de Datos Múltiple creada:");
console.log(BaseDeDatos);
console.log(`Acceso a la metadata: Tipo de dato de stock es ${BaseDeDatos.Producto.stock.dataType}.`);