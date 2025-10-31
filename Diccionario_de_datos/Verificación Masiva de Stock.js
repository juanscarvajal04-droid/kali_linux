
const productosRegistrados = [
  { nombre: "Clavo 1/4", stock: 150, precio: 0.10 },
  { nombre: "Tornillo M8", stock: 3, precio: 0.50 }, 
  { nombre: "Martillo Goma", stock: 25, precio: 8.99 },
  { nombre: "Arandela", stock: 0, precio: 0.05 }    
];

const LIMITE_REORDEN = 10;

console.log("\n--- Verificación Masiva de Stock (Aviso de Reorden) ---");

productosRegistrados.forEach((producto, index) => {
  if (producto.stock <= LIMITE_REORDEN) {
    console.log(`🚨 ALERTA: ${producto.nombre} tiene stock bajo (${producto.stock}).`);
  } else {
    console.log(`✅ ${producto.nombre}: Stock OK.`);
  }
});