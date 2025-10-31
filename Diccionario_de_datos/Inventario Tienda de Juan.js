
const diccionarioProducto = {
  "codigo": {
    "dataType": "string",
    "description": "Código único del producto ."
  },
  "nombre": {
    "dataType": "string",
    "description": "Nombre comercial del producto."
  },
  "precio": {
    "dataType": "float",
    "description": "Precio de venta al público."
  },
  "stock": {
    "dataType": "integer",
    "description": "Cantidad disponible en inventario."
  }
};


const codigo = prompt(diccionarioProducto.codigo.description);
const nombre = prompt(diccionarioProducto.nombre.description);


const precio = parseFloat(prompt(diccionarioProducto.precio.description));
const stock = parseInt(prompt(diccionarioProducto.stock.description), 10);

const registroProducto = {
    codigo: codigo,
    nombre: nombre,
    precio: precio, 
    stock: stock   
};

console.log("Producto registrado para 'Tienda de Juan':", registroProducto);