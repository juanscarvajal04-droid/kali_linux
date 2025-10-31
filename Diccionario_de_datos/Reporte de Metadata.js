const diccionarioEmpleado = {
    "nombre": { "dataType": "string" },
    "cargo": { "dataType": "string" },
    "salario": { "dataType": "float" },
    "antiguedad_meses": { "dataType": "integer" },
    "esta_activo": { "dataType": "boolean" }
};

function generarReporteMetadata(dict) {
    const reporte = {
        totalCampos: 0,
        tiposContados: {} 
    };

    for (const campo in dict) {
        if (dict.hasOwnProperty(campo)) {
            const tipo = dict[campo].dataType;

            reporte.totalCampos++;

            reporte.tiposContados[tipo] = (reporte.tiposContados[tipo] || 0) + 1;
        }
    }
    return reporte;
}

const reporteFinal = generarReporteMetadata(diccionarioEmpleado);
console.log("Reporte de Metadata Generado:", reporteFinal);