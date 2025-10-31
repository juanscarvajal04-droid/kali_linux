const diccionarioCliente = {
  "id_cliente": { "dataType": "integer", "description": "ID generado automáticamente." },
  "nombre": { "description": "Nombre del Cliente" }
};

const registrosClientes = [];

function registrarClientesConID(numClientes) {
    let idCounter = 1; 

    for (let i = 0; i < numClientes; i++) {
        alert(`Iniciando registro #${i + 1}`);
        const nombre = prompt(`Ingrese el nombre para el Cliente #${idCounter}:`);

        const registro = {
            id_cliente: idCounter, 
            nombre: nombre
        };
        
        registrosClientes.push(registro);
        idCounter++; 
    }
}

registrarClientesConID(3); 
console.log("Clientes registrados con ID consecutivo:", registrosClientes);