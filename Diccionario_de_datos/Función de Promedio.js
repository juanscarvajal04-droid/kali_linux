const notasRegistradas = [
    { materia: "JS", valor: 4.5 },
    { materia: "HTML", valor: 5.0 },
    { materia: "CSS", valor: 3.8 },
    { materia: "UX", valor: 4.1 }
];

function calcularPromedio(arrayRegistros) {
    if (arrayRegistros.length === 0) return 0;
    
    let sumaTotal = 0;
    
    arrayRegistros.forEach(registro => {
        sumaTotal += registro.valor;
    });

    const promedio = sumaTotal / arrayRegistros.length;
    return promedio.toFixed(2); 
}

const promedioClase = calcularPromedio(notasRegistradas);

console.log("Cálculo de Promedio de Notas ");
console.log(`Total de notas registradas: ${notasRegistradas.length}`);
console.log(`Promedio de la clase: ${promedioClase}`);