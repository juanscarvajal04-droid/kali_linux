
function convertir(valorStr, tipo) {
  switch (tipo) {
    case 'integer':
      return parseInt(valorStr, 10);
    case 'float':
      return parseFloat(valorStr);
    case 'string':
    default:
      return valorStr;
  }
}

const valorPrompt = prompt("Ingrese un precio (ej: 19.99):"); 
const precioConvertido = convertir(valorPrompt, 'float');

console.log(`Valor original (string): "${valorPrompt}"`);
console.log(`Valor convertido a 'float': ${precioConvertido} (Tipo: ${typeof precioConvertido})`);