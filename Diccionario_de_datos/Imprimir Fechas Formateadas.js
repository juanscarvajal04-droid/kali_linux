
const facturasRegistradas = [
  { id: "F001", fecha_emision: [15, 5, 2024] }, 
  { id: "F002", fecha_emision: [30, 10, 2025] },
  { id: "F003", fecha_emision: [1, 1, 2024] }    
];

console.log("Fechas de Emisión Formateadas ");

facturasRegistradas.forEach((factura) => {
  const vectorFecha = factura.fecha_emision;
  
  const fechaFormateada = vectorFecha.join('-'); 
  
  console.log(`Factura ${factura.id}: ${fechaFormateada}`);
});