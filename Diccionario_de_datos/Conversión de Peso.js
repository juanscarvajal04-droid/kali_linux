const diccionarioPaquete = {
  "peso_kg": { "dataType": "float", "unit": "kg" } 
};

const paquetesRegistrados = [
    { id: 1, peso_kg: 2.5 },
    { id: 2, peso_kg: 0.8 },
    { id: 3, peso_kg: 10.0 }
];

function convertirPesoAGramos(registros) {
    const registrosConvertidos = [];

    registros.forEach(paquete => {
        const pesoGramos = paquete.peso_kg * 1000;
        
        registrosConvertidos.push({
            id: paquete.id,
            peso_kg: paquete.peso_kg,
            peso_gramos: pesoGramos 
        });
    });
    return registrosConvertidos;
}

const paquetesGramos = convertirPesoAGramos(paquetesRegistrados);
console.log("\n--- Pesos Convertidos (KG a Gramos) ---");
console.log(paquetesGramos);