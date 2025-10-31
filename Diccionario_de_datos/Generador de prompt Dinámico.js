
const diccionarioProducto = {
  "nombre": { "description": "Nombre del producto" },
  "precio": { "description": "Precio de venta (float)" }
};

function generarPrompt(campoDict) {
  return `Por favor, ingrese el valor para: ${campoDict.description}:`;
}

const preguntaNombre = generarPrompt(diccionarioProducto.nombre);
const nombreProducto = prompt(preguntaNombre);

const preguntaPrecio = generarPrompt(diccionarioProducto.precio);
const precioProducto = prompt(preguntaPrecio);

console.log("Datos capturados usando la función generadora:");
console.log(`Nombre: ${nombreProducto}, Precio: ${precioProducto}`);