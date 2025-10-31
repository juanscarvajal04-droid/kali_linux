const diccionarioProducto = {
  "stock": { 
    "description": "Cantidad en inventario", 
    "dataType": "integer",
    "range": [10, 500] 
  }
};

function solicitarStockValido() {
    const MIN_STOCK = diccionarioProducto.stock.range[0];
    const MAX_STOCK = diccionarioProducto.stock.range[1];
    let stock;
    let esValido = false;

    while (!esValido) {
        const stockStr = prompt(`Ingrese Stock (Mín: ${MIN_STOCK}, Máx: ${MAX_STOCK}):`);
        stock = parseInt(stockStr, 10);

        if (isNaN(stock)) {
            alert("Error: Por favor, ingrese un número.");
        } else if (stock < MIN_STOCK || stock > MAX_STOCK) {
            alert(`Error: El stock (${stock}) está fuera del rango permitido.`);
        } else {
            esValido = true;
        }
    }
    return stock;
}

const stockFinal = solicitarStockValido();
console.log(` Registro exitoso. Stock final: ${stockFinal}`);