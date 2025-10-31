const diccionarioProducto = {
  "codigo": { "dataType": "string" },
  "nombre": { "dataType": "string" },
  "precio": { "dataType": "float" }, 
  "stock": { "dataType": "integer" }, 
  "activo": { "dataType": "boolean" }
};

function generarReporteFinal(dict) {
    let totalCampos = 0;
    let camposNumericos = 0;

    for (const campo in dict) {
        if (dict.hasOwnProperty(campo)) {
            totalCampos++;
            const tipo = dict[campo].dataType;

            if (tipo === 'integer' || tipo === 'float') {
                camposNumericos++;
            }
        }
    }
    return {
        TotalCampos: totalCampos,
        CamposNumericos: camposNumericos
    };
}

const reporteFinal = generarReporteFinal(diccionarioProducto);
console.log("\n Reporte de Diccionario Final ");
console.log(reporteFinal);