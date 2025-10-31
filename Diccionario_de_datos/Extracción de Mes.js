const facturasRegistradas = [
  { id: "F001", fecha_emision: [15, 5, 2024] }, 
  { id: "F002", fecha_emision: [30, 10, 2025] }, 
  { id: "F003", fecha_emision: [1, 1, 2024] }    
];

console.log("\n--- Extracción del Mes de Emisión ---");

facturasRegistradas.forEach((factura) => {
  const mes = factura.fecha_emision[1]; 
  console.log(`Factura ${factura.id}: Mes ${mes}`);
});