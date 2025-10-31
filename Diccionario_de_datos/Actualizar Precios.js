const productosParaAumentar = [
  { nombre: "Camiseta", precio: 15.00 },
  { nombre: "Pantalón", precio: 30.50 },
  { nombre: "Gorra", precio: 8.00 },
  { nombre: "Zapatos", precio: 55.00 }
];

const PORCENTAJE_AUMENTO = 0.10; 

console.log("\n--- Actualización de Precios (10% de aumento) ---");

for (let i = 0; i < productosParaAumentar.length; i++) {
  const producto = productosParaAumentar[i];
  
  const precioAnterior = producto.precio;
  producto.precio = precioAnterior * (1 + PORCENTAJE_AUMENTO);
  
  console.log(`"${producto.nombre}": $${precioAnterior.toFixed(2)} -> $${producto.precio.toFixed(2)}`);
}

