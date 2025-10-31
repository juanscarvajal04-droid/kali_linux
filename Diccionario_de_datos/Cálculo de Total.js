const registrosFacturas = [
    { id: "A101", monto_total: 55.50, fecha_emision: [10, 5, 2024] },
    { id: "A102", monto_total: 120.00, fecha_emision: [11, 5, 2024] },
    { id: "A103", monto_total: 35.75, fecha_emision: [12, 5, 2024] },
    { id: "A104", monto_total: 80.25, fecha_emision: [13, 5, 2024] }
];

let totalVendido = 0;

console.log(" Cálculo de Monto Total Vendido ");

registrosFacturas.forEach(factura => {
    totalVendido += factura.monto_total; 
    console.log(`Factura ${factura.id}: +$${factura.monto_total.toFixed(2)}`);
});

console.log("-------------------------------------");
console.log(`MONTO TOTAL GENERAL VENDIDO: $${totalVendido.toFixed(2)}`);