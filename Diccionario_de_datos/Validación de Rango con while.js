const diccionarioProducto = {
  "stock": { 
    "description": "Cantidad en inventario", 
    "dataType": "integer",
    "range": [1, 500] 
  }
};

const MIN_STOCK = diccionarioProducto.stock.range[0];
const MAX_STOCK = diccionarioProducto.stock.range[1];

function solicitarStockValido() {
    let stock;
    let esValido = false;

    while (!esValido) {
        const stockStr = prompt(`Ingrese Stock (entre ${MIN_STOCK} y ${MAX_STOCK}):`);
        stock = parseInt(stockStr, 10);

        if (isNaN(stock)) {
            alert("Error: Debe ingresar un número.");
        } else if (stock < MIN_STOCK || stock > MAX_STOCK) {
            alert(`Error: El stock ${stock} está fuera del rango permitido (${MIN_STOCK}-${MAX_STOCK}).`);
        } else {
            esValido = true;
        }
    }
    return stock;
}

const stockFinal = solicitarStockValido();
console.log(`Dato capturado con éxito. Stock final: ${stockFinal}`);