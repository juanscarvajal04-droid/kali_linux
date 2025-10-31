const diccionarioCliente = {
  "nombre": { "description": "Nombre del Cliente" },
  "ciudad": { "description": "Ciudad de residencia" },
  "antiguedad_meses": { "description": "Antigüedad (en meses)", "dataType": "integer" }
};

const registrosClientes = []; 

function generarPrompt(campoDict) {
  return `Ingrese el valor para: ${campoDict.description}:`;
}

function registrarClientesConBucle() {
    const numClientesStr = prompt("¿Cuántos clientes desea registrar?");
    const numClientes = parseInt(numClientesStr, 10);

    if (isNaN(numClientes) || numClientes <= 0) return;

    for (let i = 0; i < numClientes; i++) {
        alert(`Iniciando registro para Cliente #${i + 1}`);

        const nombre = prompt(generarPrompt(diccionarioCliente.nombre));
        const ciudad = prompt(generarPrompt(diccionarioCliente.ciudad));
        
        const antStr = prompt(generarPrompt(diccionarioCliente.antiguedad_meses));
        const antiguedad = parseInt(antStr, 10);

        const registro = {
            nombre: nombre,
            ciudad: ciudad,
            antiguedad_meses: antiguedad
        };
        
        registrosClientes.push(registro);
    }
}


registrarClientesConBucle();
console.log("Registros Completados (Array de Objetos):", registrosClientes);