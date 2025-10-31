
const diccionarioReceta = {
  "nombre_receta": { "dataType": "string", "description": "Nombre de la receta." },
  "ingredientes": { 
    "dataType": "array", 
    "description": "Lista de ingredientes necesarios.",
    "elementsType": "string"
  }
};


const nombre = prompt(diccionarioReceta.nombre_receta.description);
const numIngredientes = parseInt(prompt("¿Cuántos ingredientes tiene la receta?"), 10);
const ingredientesArray = [];


if (!isNaN(numIngredientes) && numIngredientes > 0) {
    for (let i = 0; i < numIngredientes; i++) {
        const ing = prompt(`Ingrese Ingrediente #${i + 1}:`);
        ingredientesArray.push(ing);
    }
}

const registroReceta = {
    nombre_receta: nombre,
    ingredientes: ingredientesArray 
};

console.log("Receta registrada con vector:", registroReceta);